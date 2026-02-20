# DR-0000-0001: Docsify Flexible Alerts for Mathematical Content

## Status
Draft

## Parent ADR
ADR-0000 (no parent ADR - standalone technology investigation)

## Context

Mathematical lecture notes and course materials require clear visual distinction between different types of content blocks:

- **Lemmas** — auxiliary results used to prove theorems
- **Propositions** — important standalone results
- **Examples** — concrete applications demonstrating concepts
- **Remarks** — clarifications, warnings, or additional context

Standard Markdown blockquotes (`>`) provide no visual distinction. Students scanning notes cannot quickly identify whether a block contains a theorem to memorize, an example to study, or a remark to keep in mind.

The site uses Docsify v4 as a client-side static site generator with no build step. We need a solution that:
1. Works entirely in the browser (no server-side processing)
2. Requires minimal configuration
3. Uses simple, readable Markdown syntax
4. Supports custom alert types beyond the built-in set
5. Renders with visual distinction (color, icons, labels)

## Design Decision

Adopt **docsify-plugin-flexible-alerts** (<https://github.com/fzankl/docsify-plugin-flexible-alerts>) and configure four custom alert types for mathematical content:

```markdown
> [!LEM]
> If $A$ is invertible, then $\det(A) \neq 0$.

> [!PROP]
> The rank-nullity theorem states that $\dim(\text{Col}(A)) + \dim(\text{Null}(A)) = n$.

> [!EXA]
> For the matrix $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, we have $\det(A) = -2$.

> [!RMK]
> This result holds for all fields, not just $\mathbb{R}$ or $\mathbb{C}$.
```

Each alert type renders as a colored, labeled block with an icon.

## Rationale

### Why This Plugin

**docsify-plugin-flexible-alerts** meets all requirements:

- **Client-side only**: Single `<script>` tag in `index.html`, no build step
- **Custom types**: Supports arbitrary alert types via configuration
- **Simple syntax**: Standard Markdown blockquotes with `[!TYPE]` tag
- **Visual clarity**: Built-in styling with icons, labels, and colors
- **Dark mode support**: Callout style adapts to dark themes
- **No dependencies**: SVG icons embedded directly (no Font Awesome required)

### Why These Four Alert Types

The selected types (`LEM`, `PROP`, `EXA`, `RMK`) cover the core categories of mathematical content:

| Type | Full Name | Purpose | Frequency |
|------|-----------|---------|-----------|
| `LEM` | Lemma | Technical stepping stones in proofs | Medium |
| `PROP` | Proposition | Standalone important results | High |
| `EXA` | Example | Concrete applications | Very High |
| `RMK` | Remark | Clarifications and warnings | High |

**Not included but considered**:
- `THM` (Theorem) — Major results. Decision: Use `PROP` to avoid over-categorization
- `DEF` (Definition) — Formal definitions. Decision: Use inline bold or standard headings
- `PROOF` — Proof environments. Decision: Use standard Markdown structure with QED symbol

### Alternative Approaches Considered

#### 1. Custom HTML/CSS blocks
```html
<div class="lemma">
  <strong>Lemma:</strong> If $A$ is invertible...
</div>
```

**Rejected**: Verbose, breaks Markdown readability, requires manual styling

#### 2. Standard Docsify callouts (with CSS hacks)
```markdown
> **Lemma:** If $A$ is invertible...
```

**Rejected**: No visual distinction, requires extensive custom CSS per type

#### 3. MDX or other JSX-based systems
**Rejected**: Requires build step, violates "no build" constraint

#### 4. Different plugin: docsify-tabs or docsify-accordion
**Rejected**: Designed for navigation/collapsing, not content categorization

## Design Decision: Configuration

### Installation (in `index.html`)

Add before the closing `</body>` tag:

```html
<!-- Flexible Alerts Plugin -->
<script src="https://unpkg.com/docsify-plugin-flexible-alerts"></script>
```

### Configuration (in `window.$docsify`)

```javascript
window.$docsify = {
  // ... existing config ...
  'flexible-alerts': {
    style: 'flat',  // or 'callout' for dark mode support

    // Custom alert types for mathematical content
    lem: {
      label: 'Lemma',
      icon: 'fas fa-angle-double-right',
      className: 'lemma'
    },
    prop: {
      label: 'Proposition',
      icon: 'fas fa-lightbulb',
      className: 'proposition'
    },
    exa: {
      label: 'Example',
      icon: 'fas fa-pen',
      className: 'example'
    },
    rmk: {
      label: 'Remark',
      icon: 'fas fa-comment-dots',
      className: 'remark'
    }
  }
}
```

**Note**: The plugin includes embedded SVG icons, so Font Awesome classes are optional. If icons are not critical, `icon` can be omitted.

### Minimal Configuration (icons disabled)

```javascript
'flexible-alerts': {
  style: 'flat',
  lem: { label: 'Lemma', iconVisibility: 'hidden' },
  prop: { label: 'Proposition', iconVisibility: 'hidden' },
  exa: { label: 'Example', iconVisibility: 'hidden' },
  rmk: { label: 'Remark', iconVisibility: 'hidden' }
}
```

This approach prioritizes clarity over decoration — the label alone provides sufficient visual distinction.

## Usage in Markdown Files

### Basic Usage

```markdown
## Cross-Filling Method

The cross-filling method generalizes Gaussian elimination via rank-one decomposition.

> [!LEM]
> Any matrix $A$ can be written as a sum of rank-one matrices: $A = \sum_{i=1}^r \mathbf{u}_i \mathbf{v}_i^T$.

> [!PROP]
> If $A = UV$ where $U$ is $m \times r$ and $V$ is $r \times n$, then $\text{rank}(A) \leq r$.

> [!EXA]
> For the matrix
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix}$$
> we can write $A = \begin{pmatrix} 1 \\ 3 \end{pmatrix} \begin{pmatrix} 1 & 2 \end{pmatrix}$, so $\text{rank}(A) = 1$.

> [!RMK]
> This decomposition is not unique — there are infinitely many ways to factor $A$ as $UV$.
```

### Per-Alert Customization

Override global settings for individual alerts using pipe-delimited parameters:

```markdown
> [!LEM|style:callout|label:Key Lemma]
> This is a particularly important lemma highlighted with callout style.
```

Available parameters:
- `style` — `flat` or `callout`
- `label` — Custom heading text
- `iconVisibility` — `visible` or `hidden`
- `labelVisibility` — `visible` or `hidden`

## Consequences

### Positive

1. **Readability**: Students can scan notes and immediately identify content type by color and label
2. **Consistency**: All mathematical content blocks follow the same syntax pattern
3. **Maintainability**: Simple Markdown syntax — no HTML/CSS knowledge required
4. **Portability**: Markdown files remain readable even without the plugin (graceful degradation to standard blockquotes)
5. **No build step**: Works entirely client-side, consistent with Docsify architecture
6. **Low overhead**: Single 12 KB script, minimal configuration

### Negative

1. **Plugin dependency**: Relies on third-party maintained plugin (mitigated by CDN unpkg.com providing stable versioning)
2. **Non-standard Markdown**: `[!TYPE]` syntax is not part of CommonMark spec (but widely used in GitHub, Obsidian, etc.)
3. **Limited styling control**: Plugin CSS is global; per-type color customization requires custom CSS
4. **Uppercase limitation**: Plugin converts type identifiers to lowercase internally, so `[!LEM]` becomes `lem` in config

### Risks

- **Plugin abandonment**: If the plugin is no longer maintained, updates may break. Mitigation: Pin to specific version via `unpkg.com/docsify-plugin-flexible-alerts@2.0.0`
- **Performance**: Each alert incurs DOM manipulation. For pages with 50+ alerts, initial render may slow slightly. Mitigation: Acceptable given Docsify's client-side nature

## Implementation Checklist

- [ ] Add plugin script to `index.html`
- [ ] Configure four custom alert types in `window.$docsify['flexible-alerts']`
- [ ] Test rendering in a sample markdown file
- [ ] Document usage in course author guidelines (if needed)
- [ ] Verify MathJax rendering inside alert blocks (LaTeX formulas should render normally)
- [ ] Test dark mode rendering (if using `callout` style)

## Related

- Site technology: Docsify v4 (see `CLAUDE.md`)
- Plugin documentation: <https://github.com/fzankl/docsify-plugin-flexible-alerts>
- MathJax integration: Alerts should not interfere with LaTeX rendering

## References

- docsify-plugin-flexible-alerts repository: <https://github.com/fzankl/docsify-plugin-flexible-alerts>
- Docsify official plugin list: <https://docsify.js.org/#/awesome?id=plugins>
- Similar syntax in other tools:
  - GitHub Flavored Markdown: `> [!NOTE]`, `> [!WARNING]`, etc.
  - Obsidian: `> [!info]`, `> [!tip]`, etc.

---

*Document authored: 2026-02-20*
*Last updated: 2026-02-20*
