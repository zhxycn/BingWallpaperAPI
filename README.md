<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/zhxycn/BingWallpaperAPI">
  <img alt="Size" src="https://img.shields.io/github/languages/code-size/zhxycn/BingWallpaperAPI">
  <img alt="Stars" src="https://img.shields.io/github/stars/zhxycn/BingWallpaperAPI">
</p>


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fzhxycn%2FBingWallpaperAPI.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fzhxycn%2FBingWallpaperAPI?ref=badge_large)

# BingWallpaperAPI
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fzhxycn%2FBingWallpaperAPI.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fzhxycn%2FBingWallpaperAPI?ref=badge_shield)

基于 PHP 的必应壁纸 API 。

## 配置修改
请修改 `index.php` 第 2-3 行。

第2行 `$ago = '0'` 表示时间。
值|含义
-|-
0|今天
1|昨天
2|前天
……|……

第3行 `$region = '1'` 表示位置。
值|含义
-|-
0|必应国际版
1|必应国内版

## 参数说明
参数名|含义
-|-
region|位置
encode|返回数据格式

无参数则返回图片。

#### 详细参数说明
**region**

值|含义
-|-
global|全球版
cn|中国版

**encode**

值|含义
-|-
json|返回 JSON 格式数据

#### 示例
```
/index.php
/index.php?region=cn&encode=json
```

## 图片参数
分辨率 `1920x1080`

## 关于
>© [zhxy-CN](https://github.com/zhxycn), Released under the [MIT](./LICENSE) License.