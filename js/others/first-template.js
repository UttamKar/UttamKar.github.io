$(document).ready(function(){
	/*Top Section*/
		$(window).scroll(function(){
			var scroll = parseInt($(this).scrollTop());
			var width = 400 - scroll/2;
			$('.jet').css({'right': scroll/4 + '%', 'width' : width +'px'});
		});

	/*Top Section opacity reduction*/
		if ($(window).width() > 992) {
	        
	        $(window).on('scroll', function() {
	            $('.topSection').css('opacity', function() {
	                return 1 - ($(window).scrollTop() / $(this).outerHeight());
	            });
	        });
	    };

	/*Top Section Background Slideshow images (backstretch.min.js Activation) */
	    $(".topSection").backstretch([
	        "img/first-template/bg.jpg",
	        "img/bg3.jpg",
	        "img/bg4.jpg"
	        
	    ], {
	        fade: 1000,
	        duration: 4000
	    });


	/*Textrotator*/
	    $(".rotate").textrotator({
	        animation: "dissolve", //fade
	        separator: ",",
	        speed: 5000
	    });

	/*countdown section*/
	    $('.countdown').downCount({
	        date: '12/15/2019 12:00:00' // m/d/y
	    });



	/*preloader*/
    	$( window ).on( "load", function() {
			$("#preloader").delay(1000).fadeOut("slow");
		});
});