// MacPlayer.Html = '<iframe border="0" src="'+maccms.path+'/static/player/dplayer.php" width="100%" height="100%" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';
// MacPlayer.Show();

MacPlayer.Html = '<iframe border="0" src="' + 'https://yun.daianyi.com:8081/player/dplayer.php?url=' + MacPlayer.PlayUrl + '&next=' + (!MacPlayer.PlayLinkNext ? '' : window.location.protocol + '//' + window.location.host + MacPlayer.PlayLinkNext) + '&title=' + document.title.split("-")[0] + '&host=' + window.location.host + '" width="100%" height="100%" marginWidth="0" frameSpacing="0" allowfullscreen="true" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';

MacPlayer.Show();