import katex from 'katex';

const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// throwOnError: false would mark syntax errors with .katex-error but render
// undefined commands (typos like \colr) as plain red text. Throwing catches both,
// and the .katex-error marker makes astro.config.mjs fail the build.
const render = (formula: string, displayMode: boolean) => {
    try {
        return katex.renderToString(formula, { displayMode, throwOnError: true });
    } catch (e) {
        return `<span class="katex-error" style="color:#cc0000" title="${escapeHtml(String(e))}">${escapeHtml(formula)}</span>`;
    }
};

/**
 * Renders mathematical formulas in a string using KaTeX.
 * Supports $$...$$ for display mode and $...$ for inline mode.
 * Display math is replaced first so its $$ delimiters aren't read as inline.
 */
export function renderMath(content: string): string {
    if (!content) return "";
    return content
        .replace(/\$\$(.*?)\$\$/g, (_m, f) => render(f, true))
        .replace(/\$(.*?)\$/g, (_m, f) => render(f, false));
}
