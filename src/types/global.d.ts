// Global type definitions
interface Window {
    printLog: (options: { id: string; message: unknown; event: CustomEvent }) => void;
}
