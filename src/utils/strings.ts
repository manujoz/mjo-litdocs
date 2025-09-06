export const getUniqueId = (prefix?: string) => {
    return `${prefix ? `${prefix}-` : ""}${Math.random().toString(36).substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}`;
};
