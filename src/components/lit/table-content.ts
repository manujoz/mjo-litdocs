import { getUniqueId } from "@/utils/strings";
import { LitElement, css, html, nothing } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("table-content")
export class TableContent extends LitElement {
    @state() items: HeadingItem[] = [];

    @query("nav") nav!: HTMLElement;

    render() {
        if (this.items.length === 0) return nothing;

        return html`
            <nav>
                <h6>On this page</h6>
                <ul>
                    ${repeat(
                        this.items,
                        (item) => item.id,
                        (item) =>
                            html` <li>
                                <a href="#${item.id}" data-id=${item.id} @click=${this.#scrollToHeading}>${item.content}</a>
                                ${item.subheadings.length > 0
                                    ? html`<ul class="subheadings">
                                          ${repeat(
                                              item.subheadings,
                                              (subitem) => subitem.id,
                                              (subitem) => html`
                                                  <li>
                                                      <a href="#${subitem.id}" data-id=${subitem.id} @click=${this.#scrollToHeading}>${subitem.content}</a>
                                                      ${subitem.subheadings.length > 0
                                                          ? html`<ul class="subheadings level2">
                                                                ${repeat(
                                                                    subitem.subheadings,
                                                                    (subSubitem) => subSubitem.id,
                                                                    (subSubitem) => html`
                                                                        <li>
                                                                            <a href="#${subSubitem.id}" data-id=${subSubitem.id} @click=${this.#scrollToHeading}
                                                                                >${subSubitem.content}</a
                                                                            >
                                                                        </li>
                                                                    `
                                                                )}
                                                            </ul>`
                                                          : nothing}
                                                  </li>
                                              `
                                          )}
                                      </ul>`
                                    : nothing}
                            </li>`
                    )}
                </ul>
            </nav>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.#generateToc();
    }

    #generateToc() {
        const headings = document.querySelectorAll(".docs-article h1, .docs-article h2, .docs-article h3, .docs-article h4");

        if (headings.length === 0) {
            this.nav.textContent = "";
            return;
        }

        const items: HeadingItem[] = [];
        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = getUniqueId("heading");
            }

            if (heading.tagName !== "H3" && heading.tagName !== "H4") {
                items.push({ id: heading.id, content: heading.textContent || "", subheadings: [] });
            } else if (heading.tagName === "H3") {
                const parent = items.at(-1);
                if (parent) {
                    parent.subheadings.push({ id: heading.id, content: heading.textContent || "", subheadings: [] });
                }
            } else if (heading.tagName === "H4") {
                const parent = items.at(-1);
                const lastSubhead = parent?.subheadings.at(-1);
                if (parent && lastSubhead) {
                    lastSubhead.subheadings.push({ id: heading.id, content: heading.textContent || "", subheadings: [] });
                }
            }
        });

        this.items = items;
        this.#scrollSpy();
    }

    #scrollToHeading = (ev: Event) => {
        ev.preventDefault();

        const target = ev.currentTarget as HTMLAnchorElement;
        const id = target.dataset.id;

        if (!id) return;
        const heading = document.querySelector(`#${id}`);

        const scrollTop = window.scrollY;
        const scrollHeading = heading?.getBoundingClientRect().top || 0;
        const headerHeight = document.querySelector("header")?.clientHeight || 0;

        window.scrollTo({
            top: scrollTop + scrollHeading - headerHeight,
            behavior: "smooth",
        });
    };

    #scrollSpy = () => {
        const headings = document.querySelectorAll(".docs-article h1, .docs-article h2, .docs-article h3, .docs-article h4");
        const windowHeight = window.innerHeight;
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const id = entry.target.id;
                    const tocLink = this.nav.querySelector(`a[data-id="${id}"]`);
                    if (entry.isIntersecting) {
                        this.nav.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
                        tocLink?.classList.add("active");
                        break;
                    }
                }
                entries.forEach((entry) => {});
            },
            {
                rootMargin: `150px 0px -${windowHeight - 150}px 0px`,
                threshold: 0,
            }
        );

        headings.forEach((heading) => observer.observe(heading));
    };

    static styles = [
        css`
            :host {
                display: block;
            }

            nav {
                position: relative;
            }
            h6 {
                margin: 0;
                padding: 0 0 15px;
                font-size: 1rem;
                opacity: 0.8;
            }
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            ul.subheadings {
                padding-left: 15px;
                margin: 5px 0 0;
            }
            ul.subheadings.level2 {
                padding-left: 25px;
            }
            li {
                margin: 0;
                padding: 5px 0;
                font-size: 0.875rem;
            }
            ul.subheadings li:last-child {
                padding-bottom: 0;
            }
            a {
                display: block;
                color: var(--mjo-foreground-color-low);
                opacity: 0.6;
                text-decoration-line: none;
                transition:
                    color 0.2s ease,
                    opacity 0.2s ease;
            }
            a.active,
            a:hover {
                color: var(--mjo-foreground-color);
                opacity: 1;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "table-content": TableContent;
    }
}

type HeadingItem = {
    id: string;
    content: string;
    subheadings: HeadingItem[];
};
