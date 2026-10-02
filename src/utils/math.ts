import katex from 'katex';

const render = (formula: string, displayMode: boolean) =>
    katex.renderToString(formula, { displayMode, throwOnError: false });

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
