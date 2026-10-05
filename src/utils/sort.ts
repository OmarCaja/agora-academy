/**
 * Comparator for "known positions first, then everything else": items are
 * ordered by `rank` (lowest first), unranked items (`undefined` or negative,
 * as from indexOf) go last, and ties fall back to `tie`.
 */
export const byRank =
    <T>(rank: (x: T) => number | undefined, tie: (a: T, b: T) => number) =>
    (a: T, b: T) => {
        const ra = rank(a), rb = rank(b);
        const ka = ra === undefined || ra < 0 ? Infinity : ra;
        const kb = rb === undefined || rb < 0 ? Infinity : rb;
        return ka === kb ? tie(a, b) : ka - kb;
    };
