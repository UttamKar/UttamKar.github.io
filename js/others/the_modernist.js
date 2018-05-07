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

	/*Wow Js activation*/
		new WOW().init();

	/*Oul-carousel Activation*/
		$(".owl-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			nav: true,
			navText: ['<span class="glyphicon glyphicon-chevron-left"></span>', '<span class="glyphicon glyphicon-chevron-right"></span>'],
			slideBy: 1,
			autoplayHoverPause : true,

			responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        576:{
		            items:1,
		            nav:true
		        }
		    }
		});
	
});