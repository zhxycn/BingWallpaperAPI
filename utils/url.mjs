import { BING_WALLPAPER_API_BASE } from '../config/constants.mjs';

export function constructBingApiUrl(ago, lang) {
    const urlParams = new URLSearchParams({
        format: 'js',
        idx: ago,
        n: '1'
    });

    if (lang) {
        const langRegex = /^([a-z]{2})([-_]([a-z]{2}))?$/i;
        const match = lang.match(langRegex);

        if (match) {
            const langCode = match[1].toLowerCase();
            const countryCode = match[3] ? match[3].toLowerCase() : '';
            urlParams.append('mkt', `${langCode}-${countryCode}`);
        }
    }

    return `${BING_WALLPAPER_API_BASE}?${urlParams.toString()}`;
}
