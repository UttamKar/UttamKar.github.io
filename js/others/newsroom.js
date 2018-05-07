$(document).ready(function() {
	/*preloader*/
		$('#preloader').fadeOut('slow');


	/*Go To Top*/
		$(window).scroll(function(){
			if($(this).scrollTop()>300){
				$('.gototop').fadeIn();
				}
			else{
				$('.gototop').fadeOut();
			}
		});
		$('.gototop').click(function(){
			$('html, body').animate({scrollTop:0}, 500);
		});

	$('.single-news').equalHeights();
});