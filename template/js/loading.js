/*
 * @Date: 2022-05-12 14:30:49
 * @Description: 
 * @LastEditTime: 2022-12-03 17:05:19
 * @FilePath: \WWW\template\bd\asset\js\parts\loading.js
 * 
 */
$(document).ready(function() {
	$(".hot_banner_box").append('<div id="loading" style="position:absolute;overflow:hidden;left:0;top:0;width:100%;height: 100%;z-index:300;"><div style="position:absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 10;"><img style="max-width: 32px;" src="https://cdn.jsdelivr.net/gh/xingchenwl/cdn@master/template/assets/img/loading.gif"></div></div>');
	setTimeout(function () {
        $("#loading").remove();   
	    $(".banner-top,.banner-wtop").addClass("opacity-top");
    }, 2000);
});