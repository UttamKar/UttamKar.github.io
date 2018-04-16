$(document).ready(function() {

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