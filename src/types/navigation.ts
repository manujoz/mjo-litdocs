export type NavigationSections = Array<NavigationSection>;

export interface NavigationSection {
    title: string;
    items: Array<{
        name: string;
        href: string;
    }>;
}
