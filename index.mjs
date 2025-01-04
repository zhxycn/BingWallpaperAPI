import { DEFAULT_AGO } from './config/constants.mjs';
import { fetchBingWallpaper } from './utils/request.mjs';
import { constructBingApiUrl } from './utils/url.mjs';
import { convertJsonToXML } from './utils/xml.mjs';
import { createSuccessResponse, createRedirectResponse, createErrorResponse } from './utils/response.mjs';
import { WallpaperService } from './services/wallpaper.mjs';

export const handler = async (event) => {
    const {
        ago = DEFAULT_AGO,
        lang,
        resolution = 'fhd',
        encode
    } = event.queryStringParameters || {};

    const apiUrl = constructBingApiUrl(ago, lang);

    try {
        const bingResponse = await fetchBingWallpaper(apiUrl);
        const wallpaperService = new WallpaperService();
        const wallpaperData = wallpaperService.transformBingResponse(bingResponse);

        if (encode === 'json') {
            return createSuccessResponse(
                JSON.stringify(wallpaperData),
                'application/json'
            );
        }
        
        if (encode === 'xml') {
            return createSuccessResponse(
                convertJsonToXML(wallpaperData, 'images'),
                'application/xml'
            );
        }

        return createRedirectResponse(
            wallpaperData.img[resolution === 'uhd' ? 'uhd' : 'fhd']
        );
    } catch (error) {
        return createErrorResponse(error);
    }
}
