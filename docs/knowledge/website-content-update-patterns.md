# Website Content Update Patterns

**Last Updated**: 2026-02-25
**Domain**: POSTECH Math Website Maintenance
**Related**: CLAUDE.md, VitePress configuration

## Overview

This document captures reusable patterns for updating academic event pages (colloquiums, seminars, courses) on the POSTECH Math website.

---

## Colloquium Page Updates

### File Location
```
/colloquium/YYYY-spring/index.md
/colloquium/YYYY-fall/index.md
```

### Page Structure

1. **Header Section**: Warning banner, chair information, location, contact, time
2. **Event Table**: Compact listing (Date | Speaker | Title)
3. **Talk Details Section**: Expanded information with abstracts

### Table Format
```markdown
| Date       | Speaker                         | Title                                                                 |
|------------|---------------------------------|-----------------------------------------------------------------------|
| Mar. 6     | Speaker Name (Institution)      | Talk Title Here                                                       |
```

**Important**: Do NOT add abstracts to the table. Keep it concise for scanning.

### Talk Details Format

After the table, add a `## Talk Details` section:

```markdown
## Talk Details

### Date - Speaker Name (Institution)
**Title:** Full talk title here

**Abstract:**

Abstract content here. Can include LaTeX math with `$...$` or `$$...$$`.

For talks where abstract is not yet available, use:
**Abstract:** TBA

---
```

**Pattern**: Each talk gets:
- H3 heading: `### Date - Name (Institution)`
- Bold **Title:** label
- Bold **Abstract:** label
- Separator `---` between talks

### Workflow for Adding Abstracts

1. **Check existing table** to identify speakers
2. **Extract title/abstract** from emails or other sources
3. **Add to Talk Details section** in chronological order
4. **Use "TBA"** for pending abstracts (do not leave blank)
5. **Commit and push** immediately (user monitors via GitHub remote)

---

## Course Page Updates

### File Location
```
/courses/MATHXXX/YYYY-spring/index.md
```

### TA Information Format

In the "Tutorial Sessions" section:

```markdown
### Tutorial Sessions

All tutorial sessions meet on **THU 18:00-18:50**. The first tutorial starts YYYY-MM-DD(Thu). Locations differ by section:

- **Section 01** (Instructor Name): Building [Room1], [Room2], [Room3]
  *TAs: TA1([Room1]), TA2([Room2]), TA3([Room3])*
- **Section 02** (Instructor Name): Building [Room1], [Room2], [Room3]
  *TAs: TA1([Room1]), TA2([Room2]), TA3([Room3])*
```

**Format Rules**:
- TAs listed in italic: `*TAs: ...*`
- Room assignment in brackets after name: `Name([Room])`
- Maintain consistent formatting across all sections
- Update when room assignments are finalized

**Common Update Trigger**: Email from TAs or course coordinator with room assignments

---

## Gmail API Integration

### Use Case
Extracting speaker abstracts from email when updating event pages.

### OAuth Token Usage
```python
headers = {
    'Authorization': f'Bearer {access_token}'
}
response = requests.get(
    'https://www.googleapis.com/gmail/v1/users/me/messages',
    headers=headers,
    params={'q': 'from:speaker@example.com abstract'}
)
```

### Email Content Extraction
```python
import base64

def extract_text_from_email(email_data):
    payload = email_data.get('payload', {})

    # Handle nested parts structure
    if 'parts' in payload:
        for part in payload['parts']:
            if part.get('mimeType') == 'text/plain':
                data = part['body']['data']
                # URL-safe base64 decode with padding
                return base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='ignore')

    # Handle direct body
    if 'body' in payload and 'data' in payload['body']:
        data = payload['body']['data']
        return base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='ignore')

    return None
```

### Search Best Practices
- Use `q=` parameter for filtering: `from:email@domain.com abstract`
- Search by speaker name or institution
- For POSTECH internal faculty, may need alternative contact methods (not always in external email)

### Data Verification
⚠️ **Important**: Always verify extracted information:
- Cross-check speaker names with event table
- Verify email addresses through multiple signals (see retrospective: 2026-02-25-verify-contact-info-carefully.md)
- Watch for similar names (e.g., "Minseok" vs "Minsung")

---

## Git Workflow for Content Updates

### Commit Pattern
```bash
git add <modified-files>
git commit -m "$(cat <<'EOF'
Update <event-type> page with <change-description>

- Detail 1
- Detail 2
- Detail 3

Co-Authored-By: engineer-agent <engineer@honeymath.ai>
EOF
)"
git push
```

### Rules
1. **Always push immediately after commit** (user monitors GitHub remote)
2. **Use `/commit` skill** to ensure correct git identity
3. **Use descriptive commit messages** with bullet points for changes
4. **Include Co-Authored-By** for transparency

### Deployment
- Push to `main` triggers GitHub Actions
- VitePress builds and deploys to `gh-pages`
- Changes appear on https://math-postech.github.io within ~2 minutes

---

## Common Patterns

### Pattern: Update Event Abstracts
1. Read current page to identify pending items (marked "TBA")
2. Search Gmail for speaker emails containing abstracts
3. Extract title and abstract text
4. Update page in Talk Details section
5. Commit with descriptive message mentioning speakers
6. Push immediately

### Pattern: Update Course TA Info
1. Receive email with TA room assignments
2. Read current course page
3. Update TA listing with room numbers in brackets
4. Maintain format consistency across sections
5. Commit and push

### Pattern: Add New Event Entry
1. Add row to event table
2. Add corresponding Talk Details section entry with "TBA"
3. Update main `index.md` if needed (for linking to semester pages)
4. Commit and push

---

## Related Documents

- `/CLAUDE.md` - Project overview and technology stack
- `/docs/knowledge/content-creation-guidelines.md` - Guidelines for course notes
- `/.agents/roles/engineer/docs/retrospectives/2026-02-25-verify-contact-info-carefully.md` - Email verification lessons
