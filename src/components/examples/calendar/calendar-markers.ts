import type { MjoCalendarDateClickEvent, MjoCalendarMarker } from "mjo-litui/types/mjo-calendar";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { printLog } from "@/lib/logger";

import "mjo-litui/mjo-calendar";

const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().padStart(2, "0");

@customElement("calendar-markers")
export class CalendarMarkers extends LitElement {
    #eventMarkers: MjoCalendarMarker[] = [
        {
            date: `${year}-${month}-05`,
            backgroundColor: "var(--mjo-color-purple)",
            foregroundColor: "white",
            time: "10:55",
            tooltip: "Meeting with John Doe",
        },
        {
            date: `${year}-${month}-12`,
            backgroundColor: "var(--mjo-color-red)",
            foregroundColor: "white",
            time: "13:30",
            tooltip: "Launch with Marie Larson",
        },
        {
            date: `${year}-${month}-12`,
            backgroundColor: "var(--mjo-color-red)",
            foregroundColor: "white",
            time: "18:00",
            tooltip: "Meeting with Carla Smith",
        },
        {
            date: `${year}-${month}-24`,
            backgroundColor: "var(--mjo-color-cyan)",
            foregroundColor: "black",
            time: "22:00",
            tooltip: "Dinner with family",
        },
    ];

    render() {
        return html`<mjo-calendar allowCompact .eventMarkers=${this.#eventMarkers} @mjo-calendar:day-click=${this.#handleDayClick}></mjo-calendar>`;
    }

    #handleDayClick(event: MjoCalendarDateClickEvent) {
        const { events, formattedDate } = event.detail;

        printLog({
            id: "calendar-markers",
            message: events.length > 0 ? `${JSON.stringify(events)}` : "No events for " + formattedDate,
            event,
        });
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
