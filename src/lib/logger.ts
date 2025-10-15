export interface LogOptions {
    id: string;
    message: unknown;
    event: CustomEvent;
}

export function printLog({ id, message, event }: LogOptions) {
    const output = document.querySelector(`#${id} .output`);
    if (output) {
        const time = new Date().toLocaleTimeString();
        const eventInfo = `[${time}] ${event.type}: ${JSON.stringify(message)}\n`;
        output.textContent = eventInfo + (output.textContent || "").split("\n").slice(0, 5).join("\n");
    }
}

/**
 * Initializes the logger functionality and makes it globally available.
 * Call this function in a <script> tag in your main layout.
 */
export function initLogger() {
    if (typeof window !== "undefined") {
        window.printLog = printLog;
    }
}
