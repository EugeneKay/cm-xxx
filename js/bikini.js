$(document).ready(function(){
	$('#duck').hover(
		function(){
			$(this).attr('src', 'img/bikini-off.png');
		},
		function(){
			$(this).attr('src', 'img/bikini-on.png');
		}
	);
});