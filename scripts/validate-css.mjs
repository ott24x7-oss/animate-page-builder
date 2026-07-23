#!/usr/bin/env node
// Validates src/styles.css: balanced braces (ignoring strings/comments) and
// Tailwind v4 parse via the compiler. Exits non-zero on any error.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cssPath = resolve(root, "src/styles.css");

function checkBraces(src) {
  let line = 1, col = 0, depth = 0;
  let inStr = null, inBlockComment = false, inLineComment = false;
  const stack = [];
  for (let i = 0; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (c === "\n") { line++; col = 0; inLineComment = false; continue; }
    col++;
    if (inLineComment) continue;
    if (inBlockComment) { if (c === "*" && n === "/") { inBlockComment = false; i++; } continue; }
    if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === "/" && n === "*") { inBlockComment = true; i++; continue; }
    if (c === "/" && n === "/") { inLineComment = true; i++; continue; }
    if (c === '"' || c === "'") { inStr = c; continue; }
    if (c === "{") { stack.push({ line, col }); depth++; }
    else if (c === "}") {
      if (!stack.length) { console.error(`✗ Unmatched '}' at ${line}:${col}`); return false; }
      stack.pop(); depth--;
    }
  }
  if (stack.length) {
    const { line, col } = stack[stack.length - 1];
    console.error(`✗ Missing closing '}' for '{' opened at ${line}:${col} (depth=${depth})`);
    return false;
  }
  return true;
}

const src = await readFile(cssPath, "utf8");
if (!checkBraces(src)) process.exit(1);
console.log("✓ Braces balanced");

try {
  const { compile } = await import("tailwindcss");
  const compiler = await compile(src, { base: resolve(root, "src"), loadStylesheet: async () => ({ base: root, content: "" }) });
  compiler.build([]);
  console.log("✓ Tailwind parsed src/styles.css");
} catch (e) {
  console.error("✗ Tailwind failed to parse src/styles.css");
  console.error(e?.message ?? e);
  process.exit(1);
}
