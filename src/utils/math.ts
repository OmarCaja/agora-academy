
import katex from 'katex';

/**
 * Renders mathematical formulas in a string using KaTeX.
 * Supports $$...$$ for display mode and $...$ for inline mode.
 */
export function renderMath(content: string): string {
    if (!content) return "";

    // Replace display math: $$...$$
    let result = content.replace(/\$\$(.*?)\$\$/g, (_match, formula) => {
        try {
            return katex.renderToString(formula, {
                displayMode: true,
                throwOnError: false
            });
        } catch (e) {
            console.error("KaTeX error:", e);
            return formula;
        }
    });

    // Replace inline math: $...$
    // We strictly look for $ not followed by $ (to avoid double matching if $$ was missed)
    // But since we already replaced $$, we can just look for $...$
    // Note: formatting in JSON might be tricky with backslashes, but standard matching should work
    result = result.replace(/\$(.*?)\$/g, (_match, formula) => {
        try {
            return katex.renderToString(formula, {
                displayMode: false,
                throwOnError: false
            });
        } catch (e) {
            console.error("KaTeX error:", e);
            return formula;
        }
    });

    return result;
}
