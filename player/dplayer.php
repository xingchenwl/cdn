<html>
<head>
    <title><?php if(empty($_GET['title'])) echo 'xplayer播放器'; else echo '正在播放 - ' .$_GET['title']; ?></title>
<style>
   #mse {
            width: 100% !important;
            height: 100% !important;
            padding-top: inherit !important;
            background: #000;
        }
</style>
</head>
<body style="background:#000" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" oncontextmenu=window.event.returnValue=false>
<div id="mse"></div>

<script src="https://unpkg.byted-static.com/xgplayer/2.32.1/browser/index.js" charset="utf-8"></script>
<script src="https://unpkg.byted-static.com/xgplayer-hls.js/2.6.3/browser/index.js" charset="utf-8"></script>
<?php 
    /**
     * 取得根域名 "com", "net", "org", "gov", "edu", "cn"
     */
    function GetUrlToDomain($domain) {
      $re_domain = ''; 
      $array_domain = explode(".", $domain);
      $array_num = count($array_domain) - 1;
      $re_domain = $array_domain[$array_num - 1] . "." . $array_domain[$array_num];
      
      return $re_domain;
    }

    $GLOBALS['yz_config']['34dc.com'] = md5('9nfWon01WqrEz6cHRGEjp1CqjnxtYp48XOHyxKMj');
    $GLOBALS['yz_config']['bjmov.com'] = md5('MGdjMIJGm1S59q8Ng5ktrmoexeovUrHOwKrmfSai0p');
    $GLOBALS['yz_config']['bzmov.com'] = md5('wByIhOVsfQrvQ5g2m0hdyjRwJXd95A3KbP1BBE08Ko');
    $GLOBALS['yz_config']['spare_key1'] = md5('eWPRjdDEiwIpO8uSg7CJjM1YjwKQdQ72sAAiGthTNW');
    $GLOBALS['yz_config']['spare_key2'] = md5('gKB1y0Rml3vW9OmOQTX9EkVEACSugj2ZK2btAeFdCS');
    $GLOBALS['yz_config']['spare_key3'] = md5('nVbBUi9Ls5yti3lmSmb0VKenUNqUMHRfl9T5tZQzzO');
    $GLOBALS['yz_config']['spare_key4'] = md5('JlmytO8tOkQiicbsBxPjPyhK36sU1lWo25PVZhBjG1');
    $GLOBALS['yz_config']['spare_key5'] = md5('2hGNkeNOjYf86lwtx2WTpzS1zHwjmPrGsNq5IerDFP');
    $GLOBALS['yz_config']['spare_key6'] = md5('dOGow83UzK2KcX2hjOfnAynp8TyVHfzz22gyMBoeOg');
    $GLOBALS['yz_config']['spare_key7'] = md5('WbME4sUWFi0U123Wcw8KgVjJH8x6JDmfLm1f2ENRky');

    function yz_encrypt($data,$key = '',$operation = 'D')
    {
        if(empty($key))$key = $GLOBALS['yz_config'][GetUrlToDomain($_GET['host'])];
        if($operation == "E"){
            $encrypted = openssl_encrypt($data, "rc4", $key, true);
            return base64_encode(base64_encode($encrypted));
        }else{
            $decrypted = openssl_decrypt(base64_decode(base64_decode($data)), 'rc4', $key, true);
            return $decrypted;
        }
    }
    ?>
<script>
    let playUrl = "<?php if(strpos($_GET['url'],'.m3u8') === false) echo yz_encrypt($_GET['url']);else echo $_GET['url']; ?>";
    console.log(playUrl);
    let nextUrl = "<?php echo $_GET['next']; ?>";
    let webData = {
        set:function(key,val){
            window.sessionStorage.setItem(key,val);
        },
        get:function(key){
            return window.sessionStorage.getItem(key);
        },
        del:function(key){
            window.sessionStorage.removeItem(key);
        },
        clear:function(key){
            window.sessionStorage.clear();
        }
    }
    let playTime = webData.get("pay " + playUrl);

    let player = new HlsJsPlayer({
        "id": "mse",
        "url": playUrl,
        "playsinline": true,
        // "fitVideoSize": 'auto',
        "playbackRate": [0.5, 0.75, 1, 1.5, 2],
        "defaultPlaybackRate": 1,
        "lastPlayTime": playTime, //视频起播时间（单位：秒）
        "lastPlayTimeHideDelay": 5, //提示文字展示时长（单位：秒）
        "pip": true,
        "x5-video-player-type": "h5",
        "x5-video-player-fullscreen": "true",
        "x5-video-orientation": "landscape",
        "autoplay": true,
        "fluid":true,
        "poster":"https://pic.rmb.bdstatic.com/bjh/news/c623cd3343d70836680acfea0a7cb7fd.jpeg",
        "rotate": {
            "clockwise": false,
            "innerRotate": true
        },
        "execBeforePluginsCall": [() => {
        }],
        keyShortcut: 'on', //键盘快捷键
        keyShortcutStep: { //设置调整步长
            currentTime: 15, //播放进度调整步长，默认10秒
            volume: 0.2 //音量调整步长，默认0.1
        },
        closeVideoTouch: true, //关闭移动端单击暂停
        enableVideoDbltouch: true, //使移动端支持双击暂停/播放
        enableContextmenu: false,
        hlsOpts: {
            xhrSetup: function (xhr, url) {
                // console.log(xhr)
                // xhr.withCredentials = true;
            }
        }, //hls.js可选配置项
        // "errorTips": `请<span>刷新</span>试试`
        cors: false,
    });

    player.on('error',(e) => {
        // console.log(e)
    });

    player.on('bufferedChange',(e) => {
        // console.log(e)
    });
    
    player.on('play', () => {
    });

    player.on('ended', () => {
        webData.set("pay " + playUrl, '');
        if (nextUrl != '') {
            top.location.href = nextUrl;
        }
    });

    player.on('timeupdate', () => {
            webData.set("pay " + playUrl, player.currentTime);
        });

    player.on('HLS_ERROR', info => {
        if (info.errorFatal)
            player.emit('error', info.errorType)
    })

    player.once('ready',()=>{
        console.log('实例化完成');
    });

    player.once('complete',()=>{
        console.log('生成结束');
    });
   
  
</script>

</body>
</html>