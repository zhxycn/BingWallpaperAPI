<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/zhxycn/BingWallpaperAPI">
  <img alt="Size" src="https://img.shields.io/github/languages/code-size/zhxycn/BingWallpaperAPI">
</p>

>Language: [简体中文](./README.md)  · · 暂不支持其他语言。Other languages are not currently supported.

# BingWallpaperAPI
基于 PHP 的必应壁纸 API 。

## 使用前的准备
下载 `index.php` 并部署到服务器。


### 设定图片的时间
`index.php` 第 10 行 `$ago = '0'; `

`''`中的数字意为几天前。详见下表。

数字|含义
-|-
-1|明天
0|今天
1|昨天
2|前天
……|……

默认为`0`，以此类推。范围`-1 ~ 7`。由于调用的是必应国内版，当日16至次日16时为一张壁纸。

## 参数说明
参数名|含义
-|-
encode|返回数据格式

>不加参数则直接返回图片。

### 数据格式说明
参数值|含义
-|-
json|返回 JSON 格式数据

## 图片参数
分辨率 `1920x1080`

## 关于
>© [zhxy-CN](https://github.com/zhxycn), Released under the [MIT](./LICENSE) License.