import https from 'https';

export async function fetchBingWallpaper(url) {
    try {
        const response = await new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let responseBody = "";
                res.on("data", (chunk) => (responseBody += chunk));
                res.on("end", () => resolve(responseBody));
                res.on("error", reject);
            });
        });
        return JSON.parse(response);
    } catch (error) {
        throw new Error("Failed to fetch Bing wallpaper data");
    }
}
