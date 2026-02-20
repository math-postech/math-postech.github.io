#!/usr/bin/env node
/**
 * Test script to compare how marked.js and markdown-it handle blockquotes with math
 *
 * Run: node renderer-comparison.js
 */

const testMarkdown = `
# Test: Blockquote + Display Math

> $$
> x^2 + y^2 = z^2
> $$

## Test 2: Nested Blockquote

>> $$
>> \\frac{a}{b} = \\frac{c}{d}
>> $$
`;

console.log('='.repeat(80));
console.log('TESTING: Blockquote + LaTeX Math Rendering');
console.log('='.repeat(80));
console.log('\nInput Markdown:');
console.log(testMarkdown);
console.log('='.repeat(80));

// Test with marked.js (what Docsify uses)
console.log('\n📦 Testing with marked.js (Docsify\'s parser):\n');
try {
  const marked = require('marked');
  const markedOutput = marked.parse(testMarkdown);
  console.log(markedOutput);

  // Check if '>' appears in the output
  const hasBlockquoteMarker = markedOutput.includes('&gt;') || markedOutput.includes('>');
  console.log('\n⚠️  Result: ' + (hasBlockquoteMarker ?
    '❌ BROKEN - Contains ">" in output (will leak into math)' :
    '✅ OK - No stray ">" found'));
} catch (err) {
  console.log('❌ marked.js not installed. Install with: npm install marked');
  console.log('   (Skipping marked.js test)');
}

console.log('\n' + '='.repeat(80));

// Test with markdown-it (what VitePress uses)
console.log('\n📦 Testing with markdown-it (VitePress\'s parser):\n');
try {
  const MarkdownIt = require('markdown-it');
  const md = new MarkdownIt();
  const markdownItOutput = md.render(testMarkdown);
  console.log(markdownItOutput);

  // Check if '>' appears in blockquote content
  const lines = markdownItOutput.split('\n');
  const mathLines = lines.filter(l => l.includes('$$') || l.includes('x^2'));
  const hasIssue = mathLines.some(l => l.includes('&gt;') || />\s*\$/.test(l));

  console.log('\n⚠️  Result: ' + (hasIssue ?
    '❌ BROKEN - Contains ">" near math delimiters' :
    '✅ OK - Blockquote structure preserved correctly'));
} catch (err) {
  console.log('❌ markdown-it not installed. Install with: npm install markdown-it');
  console.log('   (Skipping markdown-it test)');
}

console.log('\n' + '='.repeat(80));
console.log('\n🔬 Interpretation:');
console.log('   - If marked.js shows ">" in the output, those will leak into MathJax');
console.log('   - If markdown-it keeps clean HTML structure, MathJax can extract math correctly');
console.log('   - VitePress uses markdown-it, so it should avoid this issue\n');
console.log('='.repeat(80));
