<div align="center">

# BingWallpaperAPI

[![GitHub stars](https://img.shields.io/github/stars/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/network)
[![GitHub license](https://img.shields.io/github/license/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/blob/main/LICENSE)

A simple Bing wallpaper API running on AWS Lambda.

</div>

## Deployment
1. Create an AWS Lambda function, select `Node.js 18.x` or above as the runtime, and choose any architecture.
2. Click the Code button in this page, then click Download ZIP.
3. In the AWS Lambda Console, click upload the recently downloaded zip code package.
4. Click your link and enjoy\~

## Parameters
| Parameter  | Acceptable Values    | Default Value | Required | Description                      |
|------------|----------------------|---------------|----------|----------------------------------|
| ago        | 0-7                  | 0             | No       | Number of days ago for the image |
| lang       | (ISO 639 & ISO 3166) |               | No       | Region & language                |
| resolution | fhd, uhd             | fhd           | No       | Image resolution                 |
| encode     | json, xml            |               | No       | Response format                  |

## How to Use
### Get Image
When `encode` is missing or not an acceptable value, a 302 redirect response is created to the corresponding image. Only the parameters `ago`, `lang`, and `resolution` are considered.

### Use API
When `encode` is an acceptable value, the corresponding content is returned. Only the parameters `ago`, `lang`, and `encode` are considered.

The `original` part of the API response contains the original interface response. It is not recommended to use this part of the data unless necessary.

**json example**
```json
{
  "startdate":"20241231",
  "fullstartdate":"202412310800",
  "enddate":"20250101",
  "img": {
    "id":"OHR.RioNewYear_EN-US7216341802",
    "fhd":"https://bing.com/th?id=OHR.RioNewYear_EN-US7216341802_1920x1080.jpg",
    "uhd":"https://bing.com/th?id=OHR.RioNewYear_EN-US7216341802_UHD.jpg"
  },
  "copyright":"New Year's Eve fireworks over Copacabana Beach, Rio de Janeiro, Brazil (© Wagner Meier/Getty Images)",
  "copyrightlink":"https://www.bing.com/search?q=New+Year%27s+Eve&form=hpcapt&filters=HpDate%3a%2220241231_0800%22",
  "title":"Midnight in Rio",
  "original": {}
}
```

**xml example**
```xml
<images>
  <startdate>20241231</startdate>
  <fullstartdate>202412310800</fullstartdate>
  <enddate>20250101</enddate>
  <img>
    <id>OHR.RioNewYear_EN-US7216341802</id>
    <fhd>https://bing.com/th?id=OHR.RioNewYear_EN-US7216341802_1920x1080.jpg</fhd>
    <uhd>https://bing.com/th?id=OHR.RioNewYear_EN-US7216341802_UHD.jpg</uhd>
  </img>
  <copyright>New Year's Eve fireworks over Copacabana Beach, Rio de Janeiro, Brazil (© Wagner Meier/Getty Images)</copyright>
  <copyrightlink>https://www.bing.com/search?q=New+Year%27s+Eve&amp;form=hpcapt&amp;filters=HpDate%3a%2220241231_0800%22</copyrightlink>
  <title>Midnight in Rio</title>
  <original></original>
</images>
```

### Examples
If you want to get an ultra-high-definition image from Bing China:
```
https://api.owo.cab/bingwallpaper?lang=zh-cn&resolution=uhd
```
If you want to use the API to get 3-day-ago image information from Bing:
```
https://api.owo.cab/bingwallpaper?ago=3&encode=json
```

## About
> © [zhxy-CN](https://github.com/zhxycn), Released under the [MIT](./LICENSE) License.
