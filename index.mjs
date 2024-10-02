import https from "https";

const fetchData = async (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let body = "";
            res.on("data", (chunk) => body += chunk);
            res.on("end", () => {
                try {
                    resolve(JSON.parse(body));
                } catch {
                    reject(new Error("Failed to parse response"));
                }
            });
        }).on("error", (error) => {
            reject(error);
        });
    });
};

const getBingUrl = (ago, region) => {
    const baseUrl = region === "1"
        ? "https://cn.bing.com/HPImageArchive.aspx"
        : "https://bing.com/HPImageArchive.aspx";

    return `${baseUrl}?format=js&idx=${ago}&n=1${region === "1" ? "&mkt=zh-CN" : ""}`;
};

const handleError = (error) => {
    console.error(error);
    return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message || "Internal Server Error" }),
    };
};

const escapeXML = (str) => {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/"/g, "&apos;");
};

const jsonToXML = (obj, rootElement) => {
    let xml = rootElement ? `<${rootElement}>` : "";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (Array.isArray(value)) {
                value.forEach(item => {
                    xml += jsonToXML(item, key);
                });
            } else if (typeof value === "object" && value !== null) {
                xml += jsonToXML(value, key);
            } else {
                xml += `<${key}>${escapeXML(String(value))}</${key}>`;
            }
        }
    }
    xml += rootElement ? `</${rootElement}>` : "";
    return xml;
};

export const handler = async (event) => {
    const ago = event.queryStringParameters?.ago || "0";
    const regionParam = event.queryStringParameters?.region || "global";
    const region = regionParam === "cn" ? "1" : "0";

    const url = getBingUrl(ago, region);

    try {
        const data = await fetchData(url);

        if (event.queryStringParameters?.encode === "json") {
            return {
                statusCode: 200,
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            };
        } else if (event.queryStringParameters?.encode === "xml") {
            const xmlData = jsonToXML(data, "images");
            return {
                statusCode: 200,
                body: xmlData,
                headers: { "Content-Type": "application/xml" }
            };
        } else {
            const responseUrl = `https://${region === "0" ? "bing.com" : "cn.bing.com"}${data.images[0].url}`;
            return {
                statusCode: 302,
                headers: { Location: responseUrl }
            };
        }
    } catch (error) {
        return handleError(error);
    }
};
