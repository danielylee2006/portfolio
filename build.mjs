import { mkdirSync, readFileSync, writeFileSync, cpSync } from 'fs';
import { minify as minifyJS } from 'terser';
import { minify as minifyHTML } from 'html-minifier-terser';

const DIST = 'dist';
mkdirSync(DIST, { recursive: true });

// Minify JS files
for (const file of ['support.js', 'image-slot.js']) {
  const src = readFileSync(file, 'utf8');
  const result = await minifyJS(src, {
    compress: { drop_console: true, drop_debugger: true, passes: 2 },
    mangle: { toplevel: true },
  });
  writeFileSync(`${DIST}/${file}`, result.code);
  const pct = ((1 - result.code.length / src.length) * 100).toFixed(0);
  console.log(`  ${file}: ${src.length} → ${result.code.length} bytes (${pct}% smaller)`);
}

// Minify HTML (skip style/script content parsing to avoid DC template issues)
const html = readFileSync('index.html', 'utf8');

// Extract and minify the inline <script> block separately
const scriptMatch = html.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/);
let processedHTML = html;

if (scriptMatch) {
  const scriptContent = scriptMatch[1];
  const minifiedScript = await minifyJS(scriptContent, {
    compress: { drop_console: true, drop_debugger: true, passes: 2 },
    mangle: { toplevel: false, reserved: ['Component', 'DCLogic'] },
  });
  processedHTML = html.replace(scriptContent, minifiedScript.code);
}

// Minify HTML structure (but not inline CSS with DC templates)
const minifiedHTML = await minifyHTML(processedHTML, {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeEmptyAttributes: true,
  minifyCSS: false,  // skip — DC templates break CSS parser
  minifyJS: false,   // already handled above
});

writeFileSync(`${DIST}/index.html`, minifiedHTML);
const pct = ((1 - minifiedHTML.length / html.length) * 100).toFixed(0);
console.log(`  index.html: ${html.length} → ${minifiedHTML.length} bytes (${pct}% smaller)`);

// Copy static assets
cpSync('uploads', `${DIST}/uploads`, { recursive: true });
console.log('  uploads/ copied');

console.log('\n✓ Build complete → dist/');
