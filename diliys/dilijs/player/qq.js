cms_player.yun = false;
if(cms_player.jiexi){
	document.write('<iframe class="embed-responsive-item" src="'+cms_player.jiexi+cms_player.url+'" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>');
}else{
	document.write('<script type="text/javascript" src="//cdn.feifeicms.co/player/4.1/?type=qq&u='+cms_player.url+'"></script>');
}