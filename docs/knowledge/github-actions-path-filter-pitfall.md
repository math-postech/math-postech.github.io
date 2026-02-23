# GitHub Actions Path Filter Pitfall and Active Deployment Verification

**Date:** 2026-02-23
**Context:** Adding 12-week learning plan to Number Theory seminar page
**Issue:** Changes to `seminar/**` directory did not trigger GitHub Actions deployment

## Summary

When adding comprehensive seminar content to `seminar/number-theory-2026-spring/index.md`, the changes were committed and pushed successfully, but GitHub Actions workflow did not trigger automatically. This led to the user waiting 3+ minutes without seeing updates on the deployed site. The root cause was an incomplete `paths` filter in the workflow configuration that excluded the `seminar/**` directory.

**Key Learning:** When a deployment doesn't happen as expected, **actively verify the deployment** rather than passively waiting. The user's suggestion to "sleep 30s then fetch the webpage" proved to be an effective debugging methodology.

## Problem Timeline

### 1. Initial Commit and Push (22:01 UTC)
- **Action:** Committed and pushed comprehensive 12-talk seminar plan
- **Commit:** `21d430b` - "feat: Add comprehensive 12-week tentative plan for Geometric Satake seminar"
- **File changed:** `seminar/number-theory-2026-spring/index.md`
- **Expected:** GitHub Actions workflow should trigger and deploy within ~1 minute
- **Actual:** No workflow triggered

### 2. User Reports Issue (22:04 UTC, ~3 minutes later)
- **User observation:** "我现在三分钟后还没看到" (I still don't see it after 3 minutes)
- **User suggestion:** "你不是可以自己设置一个 sleep 30s 然后fetch一下网页看是否正确部署了吗" (Can't you set a sleep 30s and then fetch the webpage to check if it deployed correctly?)
- **Critical insight:** Don't passively wait - actively verify deployment status

### 3. Investigation Process
1. **Check GitHub Actions runs:** `gh run list --limit 3`
   - Latest run was from previous commit (`a56060e` at 21:00 UTC)
   - No new workflow triggered by `21d430b`

2. **Verify commit reached GitHub:** `gh api repos/.../commits/21d430b`
   - ✅ Commit present on GitHub
   - ✅ Timestamp: 22:01:53Z
   - **Conclusion:** Push succeeded, but workflow not triggered

3. **Check workflow configuration:** `.github/workflows/deploy-vitepress-main.yml`
   ```yaml
   on:
     push:
       branches:
         - main
       paths:
         - '.vitepress/**'
         - 'index.md'
         - 'colloquium/**'
         - 'courses/**'
         - 'docs/**'
         - 'package.json'
         - 'package-lock.json'
         - '.github/workflows/deploy-vitepress-main.yml'
         # ❌ MISSING: 'seminar/**'
   ```

4. **Root cause identified:** `seminar/**` path not in filter → changes to seminar files don't trigger workflow

## Root Cause Analysis

### Why the Path Filter Existed
The `paths` filter was intentionally added to **avoid unnecessary rebuilds** when only non-content files change (e.g., `README.md`, `docs/` project documentation, test files).

### Why `seminar/**` Was Missing
- **Migration artifact:** The workflow was likely created before the `seminar/` directory existed
- **Incomplete inventory:** When setting up path filters, `seminar/` was overlooked
- **Silent failure:** Path filters fail silently - if no paths match, workflow simply doesn't run (no error, no notification)

### GitHub Actions Path Filter Behavior
```yaml
paths:
  - 'included-path/**'
```
- **If matched:** Workflow runs
- **If not matched:** Workflow is **silently skipped** (not failed, not queued)
- **No notification** that the filter prevented the run
- **Critical for debugging:** Must check workflow file to understand why workflow didn't trigger

## Solution Applied

### Immediate Fix (Manual Trigger)
```bash
gh workflow run deploy-vitepress-main.yml
```
- Manually triggered workflow using `workflow_dispatch` event
- Workflow ran successfully with commit `21d430b`
- Deployment completed in ~1 minute

### Permanent Fix (Update Path Filter)
```diff
  paths:
    - '.vitepress/**'
    - 'index.md'
    - 'colloquium/**'
+   - 'seminar/**'
    - 'courses/**'
    - 'docs/**'
```
- Added `seminar/**` to path filter
- Committed as `3eb1c07`: "fix: Add seminar/** path to GitHub Actions workflow trigger"
- Future seminar updates will now trigger automatic deployment

## Effectiveness of Active Deployment Verification

### User's Methodology: "Sleep and Fetch"
The user suggested a proactive verification approach:
```
sleep 30 && fetch webpage to verify deployment
```

### Why This Methodology is Effective

#### 1. **Catches Silent Failures**
- Workflow path filters fail **silently** (no error notification)
- Passively waiting gives no indication of what went wrong
- Active fetching reveals **mismatch between expectation and reality**

#### 2. **Provides Definitive Evidence**
- GitHub UI shows "green checkmark" but that's for the last run, not necessarily your commit
- `gh run list` shows workflow history, but requires interpreting timestamps and SHAs
- **Fetching the actual deployed site** is the **ground truth**

#### 3. **Fast Feedback Loop**
Without active verification:
```
commit → push → wait indefinitely → user complains → start debugging
(3+ minutes wasted)
```

With active verification:
```
commit → push → sleep 30s → fetch → mismatch detected → start debugging immediately
(30 seconds to detection)
```

#### 4. **Separates Build Success from Deployment Success**
- **Build success:** VitePress compiled without errors
- **Deployment success:** Files actually served on GitHub Pages
- **Active fetch verifies end-to-end:** code → build → deploy → CDN → user

### Implementation Pattern

```bash
# After git push
sleep 30  # Wait for GitHub Actions to start

# Check workflow status
gh run list --limit 1 --json status,conclusion,headSha

# Verify actual deployed content
curl https://math-postech.github.io/seminar/number-theory-2026-spring/ | grep "Tentative Plan"
# OR use WebFetch
```

**Better version with workflow ID tracking:**
```bash
# Get latest run ID for your commit
RUN_ID=$(gh run list --commit $(git rev-parse HEAD) --json databaseId --jq '.[0].databaseId')

# Watch it complete
gh run watch $RUN_ID --exit-status

# Verify deployment
sleep 10  # Wait for CDN propagation
curl https://math-postech.github.io/path/to/page/ | grep "expected content"
```

## Lessons Learned

### 1. Path Filters are Silent Failure Points
- **Problem:** Incomplete path filters cause workflows to silently not run
- **Detection:** Requires actively checking workflow runs against expected commits
- **Prevention:**
  - Document all content directories in workflow comments
  - Use negative filters (`!excluded/**`) instead of positive allowlists when possible
  - Regularly audit path filters when adding new directories

### 2. Active Verification Beats Passive Waiting
- **Passive approach:** "I pushed, I'll wait and see"
  - Long feedback loop
  - No visibility into what went wrong
  - User frustration

- **Active approach:** "I pushed, let me verify it deployed"
  - Immediate feedback
  - Clear evidence of success or failure
  - Enables quick debugging

### 3. Trust But Verify
- ✅ Git push succeeded
- ✅ Commit visible on GitHub
- ❌ Workflow didn't run
- ❌ Site not updated

**Don't assume the happy path.** Verify each step explicitly.

### 4. Workflow Configuration is Critical Infrastructure
- Treat `.github/workflows/*.yml` as **critical configuration**
- Changes to directory structure should trigger workflow review
- Path filters should be **documented and justified**

## Recommendations for Future

### For This Repository

1. **Add workflow validation test**
   - Create a test that ensures all content directories are in path filter
   - Run on PR that adds new directories

2. **Document path filter rationale**
   ```yaml
   paths:
     # Content directories that trigger rebuild
     - '.vitepress/**'      # VitePress config
     - 'index.md'            # Homepage
     - 'colloquium/**'       # Colloquium schedules
     - 'seminar/**'          # Seminar schedules
     - 'courses/**'          # Course materials
     # Build dependencies
     - 'package.json'
     - 'package-lock.json'
     # Workflow itself
     - '.github/workflows/deploy-vitepress-main.yml'
   ```

3. **Consider removing path filter entirely**
   - If build time is acceptable (<2 minutes), removing filter simplifies maintenance
   - Trade-off: More frequent builds vs. simpler configuration

### For General Practice

1. **Always verify deployments after push**
   ```bash
   git push && sleep 30 && verify_deployment.sh
   ```

2. **Create deployment verification script**
   ```bash
   #!/bin/bash
   # verify_deployment.sh
   COMMIT=$(git rev-parse HEAD)
   echo "Waiting for deployment of commit $COMMIT..."

   # Wait for workflow
   sleep 30

   # Check workflow ran for this commit
   RUN_COUNT=$(gh run list --commit $COMMIT --json databaseId --jq '. | length')
   if [ "$RUN_COUNT" -eq 0 ]; then
     echo "❌ No workflow run found for commit $COMMIT"
     echo "Check .github/workflows/ path filters"
     exit 1
   fi

   # Wait for deployment
   sleep 30

   # Verify content
   if curl -s https://site.com/path/ | grep -q "expected content"; then
     echo "✅ Deployment verified"
   else
     echo "❌ Deployment failed or content not updated"
     exit 1
   fi
   ```

3. **Use GitHub Actions notification webhooks**
   - Set up Slack/Discord webhook for workflow failures
   - But remember: path filter skips don't count as failures

4. **Monitor deployment latency**
   - Track time from `git push` to content visible on site
   - Alert if latency exceeds threshold

## Reflection on AI Agent Behavior

### What I Did Wrong
- **Assumed happy path:** Saw "push succeeded" and didn't verify deployment
- **Passive waiting:** Didn't proactively check workflow status until user complained
- **Missed the pattern:** Should have checked workflow runs immediately after push

### What I Should Have Done
```bash
# Immediately after git push
gh run list --limit 1 --json headSha,status,createdAt

# Compare headSha with git rev-parse HEAD
# If no match → investigate immediately
```

### User's Contribution
The user's suggestion to "sleep and fetch" was the **correct debugging approach**:
1. **Pragmatic:** Don't wait indefinitely hoping it works
2. **Empirical:** Check the actual deployed site (ground truth)
3. **Efficient:** 30 seconds is enough for workflow to start

**This should become standard practice for all deployments.**

## Related Documents

- [VitePress Migration Pitfalls](./vitepress-migration-pitfalls.md) - File naming conventions and cache issues
- `.github/workflows/deploy-vitepress-main.yml` - Current workflow configuration

## Quick Reference: Debugging "Why Didn't My Change Deploy?"

1. **Verify commit reached remote:**
   ```bash
   git log origin/main -1
   ```

2. **Check if workflow ran for your commit:**
   ```bash
   gh run list --commit $(git rev-parse HEAD)
   ```
   - If empty → check path filters in workflow file

3. **Check workflow path filters:**
   ```bash
   grep -A 10 "paths:" .github/workflows/*.yml
   ```
   - Ensure your changed file matches a pattern

4. **Manually trigger if needed:**
   ```bash
   gh workflow run workflow-name.yml
   ```

5. **Verify actual deployed content:**
   ```bash
   curl https://site.com/path/ | grep "new content"
   ```

## Conclusion

The "sleep 30s and fetch" methodology is **highly effective** for catching deployment issues:
- ✅ Fast feedback (30s vs. 3+ minutes)
- ✅ Definitive verification (actual site content)
- ✅ Reveals silent failures (path filter mismatches)
- ✅ Enables quick debugging (clear evidence)

**Recommended practice:** Always actively verify deployments. Don't assume success - verify it.
