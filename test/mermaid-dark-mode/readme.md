# Mermaid Dark Mode Testing

> **Purpose**: Test different approaches to fix Mermaid diagram rendering in dark mode.
> **Issue**: Mermaid diagrams have poor contrast/visibility in dark mode.

---

## Test Cases

Click each link to view the diagram rendering:

### Per-Diagram Configuration Approaches

1. [Test 1: User's Custom Config Approach](test-01-user-config.md) — Custom theme variables per diagram (your solution)
2. [Test 2: Dark Theme Built-in](test-02-dark-theme.md) — Use Mermaid's built-in `dark` theme
3. [Test 3: Neutral Theme](test-03-neutral-theme.md) — Use Mermaid's `neutral` theme
4. [Test 4: Forest Theme](test-04-forest-theme.md) — Use Mermaid's `forest` theme (green)
5. [Test 5: Base Theme with Minimal Config](test-05-base-minimal.md) — Base theme with only essential colors
6. [Test 6: No Custom Config (Default)](test-06-default.md) — Default Mermaid rendering (baseline problem)

### Global Configuration Approaches

7. [Test 7: Global Configuration](test-07-global-config.md) — Set theme once in index.html, zero per-diagram config
8. [Test 8: CSS Override](test-08-css-override.md) — Force colors via custom CSS (advanced)
9. [Test 9: Hybrid Approach](test-09-hybrid-approach.md) — Global default + per-diagram override (recommended)

---

## Evaluation Criteria

For each test case, evaluate:
- ✅ **Readability in light mode**
- ✅ **Readability in dark mode**
- ✅ **Visual aesthetics**
- ✅ **Ease of maintenance** (how much config needed per diagram)
- ✅ **Consistency** across different diagram types

---

## Test Diagram

All test cases use the same diagram for fair comparison:

```
graph LR
    x[Basic Ingredients] -->|B| Bx[Middle Products]
    Bx -->|A| ABx[Final Products]
    x -->|C = AB| ABx
```

This is from the Week 1 lecture notes (Matrix Arithmetic).

---

## Notes

- Each test file contains the same diagram with different configuration
- View in both light and dark browser modes to compare
- The winning approach will be documented in a DR and applied to all lecture notes
