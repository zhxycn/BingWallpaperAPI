<div align="center">

# BingWallpaperAPI

[![GitHub stars](https://img.shields.io/github/stars/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/network)
[![GitHub license](https://img.shields.io/github/license/zhxycn/BingWallpaperAPI?style=flat-square)](https://github.com/zhxycn/BingWallpaperAPI/blob/main/LICENSE)

A simple PHP Bing wallpaper API.  
一个简易的 PHP 必应壁纸 API 。

</div>

## Deploy | 部署
1. Modify `index.php` line 3-4.  
修改 `index.php` 第 3-4 行。

<details>
<summary>Details | 详细说明</summary>

`$ago` in line 3 is how many days ago.  
第3行 `$ago` 表示日期。
Parameter \| 值|Content \| 含义
-|-
0|today \| 今天
1|yesterday \| 昨天
2|the day before yesterday \| 前天
…|…

`$region` in line 4 is Bing region.  
第4行 `$region` 表示位置。
Parameter \| 值|Content \| 含义
-|-
0|global version of Bing \| 必应国际版
1|Chinese version of Bing \| 必应国内版

</details>

2. Upload `index.php` to the server.  
上传 `index.php` 至服务器。

## How to use | 使用方法
Parameter \| 参数|Content \| 含义
-|-
ago|how many days ago \| 日期
region|region \| 位置
encode|data format \| 返回数据格式

>The default parameter is the `index.php` line 3-4.  
缺省参数则为 `index.php` 3-4 行默认值。

<details>
<summary>Details | 详细说明</summary>

**ago**
Parameter \| 值|Content \| 含义
-|-
0|today \| 今天
1|yesterday \| 昨天
2|the day before yesterday \| 前天
…|…

**region**
Parameter \| 值|Content \| 含义
-|-
global|global version of Bing \| 必应国际版
cn|Chinese version of Bing \| 必应国内版

**encode**
Parameter \| 值|Content \| 含义
-|-
json|return JSON format data \| 返回 JSON 格式数据

</details>

### Example | 示例
```
/index.php
/index.php?ago=0&region=cn&encode=json
```

## Image Properties | 图片参数
Resolution `1920x1080`  
分辨率 `1920x1080`

## About | 关于
>© [zhxy-CN](https://github.com/zhxycn), Released under the [MIT](./LICENSE) License.  
Image copyright owned by [Bing](https://www.bing.com).
