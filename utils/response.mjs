const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export function createSuccessResponse(body, contentType) {
    return {
        statusCode: 200,
        body,
        headers: {
            ...CORS_HEADERS,
            "Content-Type": contentType,
        },
    };
}

export function createRedirectResponse(location) {
    return {
        statusCode: 302,
        headers: {
            ...CORS_HEADERS,
            location,
        },
        body: '',
    };
}

export function createErrorResponse(error) {
    console.error(error);
    return {
        statusCode: 500,
        body: JSON.stringify({ 
            error: error.message || "Internal Server Error" 
        }),
        headers: CORS_HEADERS,
    };
}
