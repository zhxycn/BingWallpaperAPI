<?php
    $ago = '0'; // 时间 (几天前。0为今天，1为昨天，2为前天，以此类推。)
    $region = '1'; // 位置（必应国际版填0，国内版填1。）
    // 必应国内版当日16至次日16时为一张壁纸。

    if ($_GET['region'] == 'global') {
        $region = '0';
    } elseif ($_GET['region'] == 'cn') {
        $region = '1';
    } else {
        $region = $region;
    }

    if ($region == '0') {
        $data = json_decode(file_get_contents('https://bing.com/HPImageArchive.aspx?format=js&idx='.$ago.'&n=1'), true); 
        $url = "https://bing.com".$data['images'][0]['url']; 
    } elseif ($region == '1') {
        $data = json_decode(file_get_contents('https://cn.bing.com/HPImageArchive.aspx?format=js&idx='.$ago.'&n=1&mkt=zh-CN'), true); 
        $url = "https://cn.bing.com".$data['images'][0]['url']; 
    }
    
    $date = $data['images'][0]['startdate'];
    $copyright = $data['images'][0]['copyright'];

    if ($_GET['encode'] == 'json') {
    	$echo = array('date' => $date, 'url' => $url, 'copyright' => $copyright);
        echo json_encode($echo);
    } else {
        header("Location:$url"); 
    }
?>
