import { normalizeText } from "./normalizeText";

export const slugify = (text: string) =>
    normalizeText(text)
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
