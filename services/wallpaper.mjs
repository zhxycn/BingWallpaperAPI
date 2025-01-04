export class WallpaperService {
    transformBingResponse(response) {
        const {
            startdate,
            fullstartdate,
            enddate,
            urlbase,
            copyright,
            copyrightlink,
            title
        } = response.images[0];

        return {
            startdate,
            fullstartdate,
            enddate,
            img: {
                id: urlbase.replace('/th?id=', ''),
                fhd: `https://bing.com${urlbase}_1920x1080.jpg`,
                uhd: `https://bing.com${urlbase}_UHD.jpg`,
            },
            copyright,
            copyrightlink,
            title,
            original: response,
        };
    }
}
