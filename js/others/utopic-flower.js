$(document).ready(function() {
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