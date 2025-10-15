// Cache for version to avoid multiple requests
let cachedVersion: string | null = null;

export const getVersion = async (): Promise<string> => {
    console.log("Fetching version...");
    // Return cached version if available
    if (cachedVersion) {
        return cachedVersion;
    }

    try {
        // Fetch the raw package.json from GitHub
        const response = await fetch("https://raw.githubusercontent.com/manujoz/mjo-litui/master/package.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const packageData = await response.json();
        const version = packageData.version || "1.0.0";
        cachedVersion = version;

        return version;
    } catch (error) {
        console.warn("Failed to fetch version from GitHub:", error);
        // Fallback to default version
        return "1.0.0";
    }
};

// Synchronous version for cases where you need immediate access
export const getVersionSync = (): string => {
    return cachedVersion || "1.0.0";
};

// Function to get version with a timeout
export const getVersionWithTimeout = async (timeoutMs: number = 5000): Promise<string> => {
    return Promise.race([
        getVersion(),
        new Promise<string>((resolve) => {
            setTimeout(() => resolve("1.0.0"), timeoutMs);
        }),
    ]);
};
