import https from "https";

const fetchData = async (url) => {
    try {
        const res = await new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let body = "";
                res.on("data", (chunk) => (body += chunk));
                res.on("end", () => resolve(body));
                res.on("error", reject);
            });
        });
        return JSON.parse(res);
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};

const getBingUrl = (ago, region) => {
    const baseUrl = region === "1"
        ? "https://cn.bing.com/HPImageArchive.aspx"
        : "https://bing.com/HPImageArchive.aspx";
    const market = region === "1" ? "&mkt=zh-CN" : "";
    return `${baseUrl}?format=js&idx=${ago}&n=1${market}`;
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
        .replace(/'/g, "&apos;");
};

const jsonToXML = (obj, rootElement) => {
    let xml = rootElement ? `<${rootElement}>` : "";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((item, index) => {
                    const suffix = obj[key].length === 1 ? "" : `_${index}`;
                    xml += jsonToXML(item, `${key}${suffix}`);
                });
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                xml += jsonToXML(obj[key], key);
            } else {
                xml += `<${key}>${escapeXML(String(obj[key]))}</${key}>`;
            }
        }
    }
    return rootElement ? `${xml}</${rootElement}>` : xml;
};

export const handler = async (event) => {
    const ago = event.queryStringParameters?.ago || "0";
    const region = event.queryStringParameters?.region === "cn" ? "1" : "0";
    const resolution =
        event.queryStringParameters?.resolution === "uhd" ? "uhd" : "fhd";

    const url = getBingUrl(ago, region);

    try {
        const response = await fetchData(url);
        const {
            startdate,
            fullstartdate,
            enddate,
            urlbase,
            copyright,
            copyrightlink,
        } = response.images[0];

        const domain = region === "0" ? "bing.com" : "cn.bing.com";
        const data = {
            startdate,
            fullstartdate,
            enddate,
            img: {
                id: `${urlbase.replace('/th?id=', '')}`,
                fhd: `https://${domain}${urlbase}_1920x1080.jpg`,
                uhd: `https://${domain}${urlbase}_UHD.jpg`,
            },
            copyright,
            copyrightlink,
            original: response,
        };

        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
        };

        const createResponse = (body, contentType) => ({
            statusCode: 200,
            body,
            headers: {
                ...corsHeaders,
                "Content-Type": contentType,
            },
        });

        const handlers = {
            json: () => createResponse(JSON.stringify(data), "application/json"),
            xml: () => createResponse(jsonToXML(data, "images"), "application/xml"),
        };

        return (
            handlers[event.queryStringParameters?.encode] ||
            (() => ({
                statusCode: 302,
                headers: {
                    ...corsHeaders,
                    location: data.img[resolution],
                },
            }))
        )();
    } catch (error) {
        return handleError(error);
    }
};
