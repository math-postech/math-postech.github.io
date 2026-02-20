# Diagrams Test

Testing Mermaid and PlantUML diagram rendering in VitePress.

---

## Mermaid Diagrams

VitePress has **built-in Mermaid support**! No plugins needed.

### Flowchart

```mermaid
graph TD
    A[Start] --> B{Is n = 0?}
    B -->|Yes| C[Return 1]
    B -->|No| D[Compute n!]
    D --> E[Return result]
    E --> F[End]
```

### Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant VitePress
    participant MathJax
    User->>VitePress: Write Markdown with math
    VitePress->>VitePress: Parse with markdown-it
    VitePress->>MathJax: Send clean math content
    MathJax->>User: Render beautiful equations
```

### Class Diagram

```mermaid
classDiagram
    class Markdown {
        +String content
        +parse()
        +render()
    }
    class MathBlock {
        +String formula
        +render()
    }
    class Blockquote {
        +String content
        +contains(MathBlock)
    }
    Markdown --> MathBlock
    Markdown --> Blockquote
    Blockquote --> MathBlock
```

### Pie Chart

```mermaid
pie title VitePress vs Docsify Weekly Downloads
    "VitePress" : 450000
    "Docsify" : 50000
```

---

## PlantUML Diagrams

PlantUML support via `markdown-it-plantuml` plugin.

### Simple UML Class Diagram

```plantuml
@startuml
class VitePress {
  +String title
  +Config config
  +build()
  +dev()
}

class Docsify {
  +String title
  +render()
}

VitePress --> MarkdownIt : uses
Docsify --> MarkedJs : uses

note right of VitePress
  Modern, fast,
  actively maintained
end note

note right of Docsify
  Legacy tool,
  has bugs
end note
@enduml
```

### Sequence Diagram (PlantUML)

```plantuml
@startuml
User -> Browser: Visit site
Browser -> Server: Request HTML
Server -> Browser: Return static HTML
Browser -> MathJax: Load math renderer
MathJax -> Browser: Render equations
Browser -> User: Display beautiful page
@enduml
```

---

## Comparison with Docsify

| Feature | Docsify | VitePress |
|---------|---------|-----------|
| **Mermaid** | Plugin required (`docsify-mermaid`) | ✅ Built-in |
| **PlantUML** | Plugin required (`docsify-plantuml`) | ✅ markdown-it plugin |
| **Rendering** | Client-side (slow) | ✅ Build-time (fast) |
| **Caching** | Browser cache issues | ✅ Auto hash-busting |

---

## Test Status

::: tip Diagrams Working ✅
If you see rendered diagrams above (not code blocks), the test passed!
:::

---

## More Tests

- [Blockquote + Math](./blockquote-math)
- [Custom Alerts](./custom-alerts)
