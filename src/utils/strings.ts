export const getUniqueId = (prefix?: string) => {
    return `${prefix ? `${prefix}-` : ""}${Math.random().toString(36).substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}`;
};

export function decodeHtmlEntities(str: string): string {
    return str
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&#x27;/g, "'")
        .replace(/&#x60;/g, "`");
}
