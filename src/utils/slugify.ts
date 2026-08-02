export const slugify = (text: string) => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
};
