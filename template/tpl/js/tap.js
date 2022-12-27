$(function () {
    $('.hl-tabs-item').each(function () {
        if ($(this).length) {
            var $_this = $(this);
            var $tab = $_this.find('.hl-tabs .hl-tabs-btn');
            var $box = $_this.find('.hl-tabs-box');
            $tab.removeClass('active');
            $tab.eq(0).addClass('active');
            $box.hide();
            switchVideo($box.eq(0)[0].getElementsByTagName('a'))
            $box.eq(0).show();
            $_this.find('.hl-tabs-box .hl-lazy').lazyload({
                threshold: 100
            });
        }
    });
});
function switchVideo(vod) {
    var dyPlay = document.getElementById("playerCnt");
    var dyIf = '<iframe width="100%" height="100%" class="embed-responsive-item" src="/static/player/dplayer.php?url=' + $(vod).attr("data-vodId").replace(/\s+/g, "") + '&next="" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"  allowfullscreen="true"></iframe>';
    dyPlay.innerHTML = dyIf
}