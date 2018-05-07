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
		
	/*Nivo Slider Activation*/
		$('#slider').nivoSlider({
			manualAdvance: false,
			directionNav: true,
			controlNav: false,
			prevText: '<span class="glyphicon glyphicon-arrow-left"></span>',
			nextText: '<span class="glyphicon glyphicon-arrow-right"></span>'
		});
	/*Wow Js activation*/
		if ($(window).width() > 676) {
	        new WOW().init();
	    };
	
});