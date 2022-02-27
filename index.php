<?php
    function a() {
        $ago = '0'; // 设定图片的时间(几天前。0为今天，1为昨天，2为前天，-1为明天，以此类推，由于调用的是必应国内版，当日16至次日16时为一张壁纸。)
	    $data = json_decode(file_get_contents('https://cn.bing.com/HPImageArchive.aspx?format=js&idx='.$ago.'&n=1&mkt=zh-CN'), true); 
    	return "https://cn.bing.com".$data['images'][0]['url']; 
    };
        $url = a(); 

    if ($_GET['encode'] == 'json') {
    	$echo = array('url' => $url);
        echo json_encode($echo);
    } else {
        header("Location:$url"); 
    }

?>
