import{_ as a,o as n,c as i,ae as e}from"./chunks/framework.CuY5iCnT.js";const g=JSON.parse('{"title":"Diagrams Test","description":"","frontmatter":{},"headers":[],"relativePath":"tests/diagrams.md","filePath":"tests/diagrams.md","lastUpdated":1771626807000}'),t={name:"tests/diagrams.md"};function l(p,s,r,h,d,o){return n(),i("div",null,[...s[0]||(s[0]=[e(`<h1 id="diagrams-test" tabindex="-1">Diagrams Test <a class="header-anchor" href="#diagrams-test" aria-label="Permalink to &quot;Diagrams Test&quot;">​</a></h1><p>Testing Mermaid and PlantUML diagram rendering in VitePress.</p><hr><h2 id="mermaid-diagrams" tabindex="-1">Mermaid Diagrams <a class="header-anchor" href="#mermaid-diagrams" aria-label="Permalink to &quot;Mermaid Diagrams&quot;">​</a></h2><p>VitePress has <strong>built-in Mermaid support</strong>! No plugins needed.</p><h3 id="flowchart" tabindex="-1">Flowchart <a class="header-anchor" href="#flowchart" aria-label="Permalink to &quot;Flowchart&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[Start] --&gt; B{Is n = 0?}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt;|Yes| C[Return 1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt;|No| D[Compute n!]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[Return result]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[End]</span></span></code></pre></div><h3 id="sequence-diagram" tabindex="-1">Sequence Diagram <a class="header-anchor" href="#sequence-diagram" aria-label="Permalink to &quot;Sequence Diagram&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    participant User</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    participant VitePress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    participant MathJax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    User-&gt;&gt;VitePress: Write Markdown with math</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VitePress-&gt;&gt;VitePress: Parse with markdown-it</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VitePress-&gt;&gt;MathJax: Send clean math content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MathJax-&gt;&gt;User: Render beautiful equations</span></span></code></pre></div><h3 id="class-diagram" tabindex="-1">Class Diagram <a class="header-anchor" href="#class-diagram" aria-label="Permalink to &quot;Class Diagram&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class Markdown {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +String content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +parse()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +render()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class MathBlock {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +String formula</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +render()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class Blockquote {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +String content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        +contains(MathBlock)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Markdown --&gt; MathBlock</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Markdown --&gt; Blockquote</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Blockquote --&gt; MathBlock</span></span></code></pre></div><h3 id="pie-chart" tabindex="-1">Pie Chart <a class="header-anchor" href="#pie-chart" aria-label="Permalink to &quot;Pie Chart&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pie title VitePress vs Docsify Weekly Downloads</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;VitePress&quot; : 450000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Docsify&quot; : 50000</span></span></code></pre></div><hr><h2 id="plantuml-diagrams" tabindex="-1">PlantUML Diagrams <a class="header-anchor" href="#plantuml-diagrams" aria-label="Permalink to &quot;PlantUML Diagrams&quot;">​</a></h2><p>PlantUML support via <code>markdown-it-plantuml</code> plugin.</p><h3 id="simple-uml-class-diagram" tabindex="-1">Simple UML Class Diagram <a class="header-anchor" href="#simple-uml-class-diagram" aria-label="Permalink to &quot;Simple UML Class Diagram&quot;">​</a></h3><div class="language-plantuml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plantuml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>class VitePress {</span></span>
<span class="line"><span>  +String title</span></span>
<span class="line"><span>  +Config config</span></span>
<span class="line"><span>  +build()</span></span>
<span class="line"><span>  +dev()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Docsify {</span></span>
<span class="line"><span>  +String title</span></span>
<span class="line"><span>  +render()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VitePress --&gt; MarkdownIt : uses</span></span>
<span class="line"><span>Docsify --&gt; MarkedJs : uses</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of VitePress</span></span>
<span class="line"><span>  Modern, fast,</span></span>
<span class="line"><span>  actively maintained</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of Docsify</span></span>
<span class="line"><span>  Legacy tool,</span></span>
<span class="line"><span>  has bugs</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h3 id="sequence-diagram-plantuml" tabindex="-1">Sequence Diagram (PlantUML) <a class="header-anchor" href="#sequence-diagram-plantuml" aria-label="Permalink to &quot;Sequence Diagram (PlantUML)&quot;">​</a></h3><div class="language-plantuml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plantuml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>User -&gt; Browser: Visit site</span></span>
<span class="line"><span>Browser -&gt; Server: Request HTML</span></span>
<span class="line"><span>Server -&gt; Browser: Return static HTML</span></span>
<span class="line"><span>Browser -&gt; MathJax: Load math renderer</span></span>
<span class="line"><span>MathJax -&gt; Browser: Render equations</span></span>
<span class="line"><span>Browser -&gt; User: Display beautiful page</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><hr><h2 id="comparison-with-docsify" tabindex="-1">Comparison with Docsify <a class="header-anchor" href="#comparison-with-docsify" aria-label="Permalink to &quot;Comparison with Docsify&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Feature</th><th>Docsify</th><th>VitePress</th></tr></thead><tbody><tr><td><strong>Mermaid</strong></td><td>Plugin required (<code>docsify-mermaid</code>)</td><td>✅ Built-in</td></tr><tr><td><strong>PlantUML</strong></td><td>Plugin required (<code>docsify-plantuml</code>)</td><td>✅ markdown-it plugin</td></tr><tr><td><strong>Rendering</strong></td><td>Client-side (slow)</td><td>✅ Build-time (fast)</td></tr><tr><td><strong>Caching</strong></td><td>Browser cache issues</td><td>✅ Auto hash-busting</td></tr></tbody></table><hr><h2 id="test-status" tabindex="-1">Test Status <a class="header-anchor" href="#test-status" aria-label="Permalink to &quot;Test Status&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Diagrams Working ✅</p><p>If you see rendered diagrams above (not code blocks), the test passed!</p></div><hr><h2 id="more-tests" tabindex="-1">More Tests <a class="header-anchor" href="#more-tests" aria-label="Permalink to &quot;More Tests&quot;">​</a></h2><ul><li><a href="./blockquote-math">Blockquote + Math</a></li><li><a href="./custom-alerts">Custom Alerts</a></li></ul>`,29)])])}const k=a(t,[["render",l]]);export{g as __pageData,k as default};
