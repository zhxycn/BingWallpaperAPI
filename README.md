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
| Parameter  | Acceptable Values                          | Default Value | Required | Description                          |
|------------|--------------------------------------------|---------------|----------|--------------------------------------|
| ago        | 0-7                                        | 0             | No       | Number of days ago for the image     |
| lang       | See [Region & Language](#region--language) |               | No       | Region & language                    |
| resolution | fhd, uhd                                   | fhd           | No       | Image resolution                     |
| encode     | json, xml                                  |               | No       | Response format                      |

### Region & Language

<details>
<summary>Click to show</summary>

`fr-xl`: Afrique francophone (français)  
`es-xl`: América Latina (español)  
`es-ar`: Argentina (español)  
`en-au`: Australia (English)  
`fr-be`: Belgique (français)  
`nl-be`: België (Nederlands)  
`pt-br`: Brasil (português)  
`en-ca`: Canada (English)  
`fr-ca`: Canada (français)  
`es-cl`: Chile (español)  
`es-co`: Colombia (español)  
`da-dk`: Danmark (Dansk)  
`de-de`: Deutschland (Deutsch)  
`es-es`: España (español)  
`fr-fr`: France (français)  
`en-in`: India (English)  
`mr-in`: India (मराठी)  
`hi-in`: India (हिंदी)  
`bn-in`: India (বাংলা)  
`te-in`: India (తెలుగు)  
`id-id`: Indonesia (Bahasa Indonesia)  
`en-xl`: International Edition (English)  
`en-ie`: Ireland (English)  
`it-it`: Italia (italiano)  
`hu-hu`: Magyarország (magyar)  
`en-my`: Malaysia (English)  
`es-mx`: México (español)  
`nl-nl`: Nederland (Nederlands)  
`en-nz`: New Zealand (English)  
`nb-no`: Norge (norsk, bokmål)  
`es-pe`: Perú (español)  
`en-ph`: Philippines (English)  
`pl-pl`: Polska (polski)  
`pt-pt`: Portugal (Português)  
`de-ch`: Schweiz (Deutsch)  
`en-sg`: Singapore (English)  
`en-za`: South Africa (English)  
`fr-ch`: Suisse (français)  
`fi-fi`: Suomi (suomi)  
`sv-se`: Sverige (svenska)  
`tr-tr`: Türkiye (Türkçe)  
`en-ae`: United Arab Emirates (English)  
`en-gb`: United Kingdom (English)  
`en-us`: United States (English)  
`es-us`: United States (español)  
`es-ve`: Venezuela (español)  
`vi-vn`: Việt Nam (Tiếng Việt)  
`de-at`: Österreich (Deutsch)  
`cs-cz`: Česká republika (čeština)  
`el-gr`: Ελλάδα (ελληνικά)  
`ru-xl`: Международное издание (Pусский)  
`ru-ru`: Россия (Pусский)  
`he-il`: ישראל (עברית)  
`ar-ae`: الإمارات العربية المتحدة (العربية)  
`ar-sa`: المملكة العربية السعودية (العربية)  
`ar-eg`: مصر (العربية)  
`th-th`: ไทย (ไทย)  
`zh-cn`: 中华人民共和国 (简体中文)  
`zh-tw`: 中國台灣 (繁體中文)  
`ja-jp`: 日本 (日本語)  
`zh-hk`: 香港特别行政區 (繁體中文)  
`ko-kr`: 한국 (한국어)  

</details>

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
https://api.collei.net/bingwallpaper?lang=zh-cn&resolution=uhd
```
If you want to use the API to get 3-day-ago image information from Bing:
```
https://api.collei.net/bingwallpaper?ago=3&encode=json
```

## About
> © [zhxy-CN](https://github.com/zhxycn), Released under the [MIT](./LICENSE) License.
