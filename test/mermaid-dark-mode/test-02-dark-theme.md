# Test 2: Dark Theme Built-in

> **Approach**: Use Mermaid's built-in `dark` theme
> **Pros**: Zero configuration, designed for dark backgrounds
> **Cons**: May look odd in light mode

---

## Configuration Used

```yaml
config:
  theme: 'dark'
```

---

## Test Diagram

```mermaid
---
config:
  theme: 'dark'
---
graph LR
    x[Basic Ingredients] -->|B| Bx[Middle Products]
    Bx -->|A| ABx[Final Products]
    x -->|C = AB| ABx
```

---

## Evaluation

**Light Mode**: ⬜ (test in browser) — May have poor contrast on white background

**Dark Mode**: ⬜ (test in browser) — Should work well

**Aesthetics**: Mermaid's default dark color scheme (blues/grays)

**Maintenance**: ✅ LOW — only 2 lines of config

**Notes**: Simple solution if the site is always in dark mode, or if we can detect theme and switch dynamically.
