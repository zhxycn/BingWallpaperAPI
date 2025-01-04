import { SUPPORTED_LANGUAGES, BING_WALLPAPER_API_BASE } from '../config/constants.mjs';

export function constructBingApiUrl(ago, lang) {
    const urlParams = new URLSearchParams({
        format: 'js',
        idx: ago,
        n: '1'
    });

    if (lang && SUPPORTED_LANGUAGES.includes(lang.toLowerCase())) {
        urlParams.append('mkt', lang.toLowerCase());
    }

    return `${BING_WALLPAPER_API_BASE}?${urlParams.toString()}`;
}
