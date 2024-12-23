<div align="center">

# BingWallpaperAPI

[![GitHub stars](https://img.shields.io/github/stars/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/network)
[![GitHub license](https://img.shields.io/github/license/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/blob/main/LICENSE)

A simple Bing wallpaper API running on AWS Lambda.

</div>

## Deployment
1. Create an AWS Lambda function, select `Node.js 18.x` or above as the runtime, and choose any architecture.
2. Replace the content of `index.mjs` with your own, then click the deploy button.
3. Click your link and enjoy\~

## Parameters
| Parameter | Acceptable Values | Default Value | Required | Description |
|-----------|-------------------|---------------|----------|-------------|
| ago       | 0-7               | 0             | No       | Number of days ago for the image |
| region    | cn                |               | No       | Region (defaults to Bing Global) |
| resolution| fhd, uhd          | fhd           | No       | Image resolution |
| encode    | json, xml         |               | No       | Response format |

### How to Use
#### Get Image
When `encode` is missing or not an acceptable value, a 302 redirect response is created to the corresponding image. Only the parameters `ago`, `region`, and `resolution` are considered.

#### Use API
When `encode` is an acceptable value, the corresponding content is returned. Only the parameters `ago`, `region`, and `encode` are considered.

The `original` part of the API response contains the original interface response. It is not recommended to use this part of the data unless necessary.

**json example**
```json
{
  "startdate": "20241222",
  "fullstartdate": "202412220800",
  "enddate": "20241223",
  "img": {
    "fhd": "https://bing.com/th?id=OHR.CrystalPier_ROW3716949371_1920x1080.jpg",
    "uhd": "https://bing.com/th?id=OHR.CrystalPier_ROW3716949371_UHD.jpg"
  },
  "copyright": "Crystal Pier, Pacific Beach, San Diego, California, USA (© SamAntonioPhotography/Getty Images)",
  "copyrightlink": "https://www.bing.com/search?q=San+Diego+California&form=hpcapt",
  "original": {}
}
```

**xml example**
```xml
<images>
  <startdate>20241222</startdate>
  <fullstartdate>202412220800</fullstartdate>
  <enddate>20241223</enddate>
  <img>
    <fhd>https://bing.com/th?id=OHR.CrystalPier_ROW3716949371_1920x1080.jpg</fhd>
    <uhd>https://bing.com/th?id=OHR.CrystalPier_ROW3716949371_UHD.jpg</uhd>
  </img>
  <copyright>Crystal Pier, Pacific Beach, San Diego, California, USA (© SamAntonioPhotography/Getty Images)</copyright>
  <copyrightlink>https://www.bing.com/search?q=San+Diego+California&form=hpcapt</copyrightlink>
  <original></original>
</images>
```

### Examples
If you want to get an ultra-high-definition image from Bing China Mainland:
```
https://api.collei.net/bingwallpaper?region=cn&resolution=uhd
```
If you want to use the API to get 3-day-ago image information from Bing Global:
```
https://api.collei.net/bingwallpaper?ago=3&encode=json
```

## About
> © [zhxy-CN](https://github.com/zhxycn), Released under the [MIT](./LICENSE) License.
