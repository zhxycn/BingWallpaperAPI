<?php
// GitHub: https://github.com/zhxycn/BingWallpaperAPI
$ago = '0';  //How many days ago
$region = '0';  //Bing region

$ago = $_REQUEST['ago'];
if ($_REQUEST['region'] == 'global') {
    $region = '0';
} elseif ($_REQUEST['region'] == 'cn') {
    $region = '1';
} else {
    $region = $region;
}
if ($region == '0') {
    $data = json_decode(file_get_contents('https://bing.com/HPImageArchive.aspx?format=js&idx=' . $ago . '&n=1'), true);
    $url = "https://bing.com" . $data['images'][0]['url'];
} elseif ($region == '1') {
    $data = json_decode(file_get_contents('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=' . $ago . '&n=1&mkt=zh-CN'), true);
    $url = "https://cn.bing.com" . $data['images'][0]['url'];
}
$date = $data['images'][0]['startdate'];
$copyright = $data['images'][0]['copyright'];
if ($_REQUEST['encode'] == 'json') {
    $echo = array('date' => $date, 'url' => $url, 'copyright' => $copyright);
    echo json_encode($echo);
} else {
    header("Location:$url");
}
?>
