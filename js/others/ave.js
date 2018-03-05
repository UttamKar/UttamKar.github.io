$(document).ready(function(){

    /*Star Rating*/
	   $(".my-rating").starRating({
		  initialRating: 4,
		  strokeColor: '#894A00',
		  strokeWidth: 10,
		  starSize: 16
		});

   /*MagnificPopup Activation*/
		$('.test-popup-link').magnificPopup({
		  type: 'image',
		  gallery: {
		    enabled: true
		  },

		  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
		  zoom: {
		    enabled: true,
		    duration: 300,
		    easing: 'ease-in-out',
		    opener: function(openerElement) {
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
		  }
		});

   /*Elevate-zoom Activation*/
		$("#zoom_03").elevateZoom({
		  zoomType	: "lens",
		  lensShape : "round",
		  lensSize    : 150
		});


	/*Smooth Scrolling*/
	$('.slide-section').click(function(e){
		e.preventDefault();

		var linkHref = $(this).attr('href');

		$('body, html').animate({
			scrollTop: $(linkHref).offset().top
		}, 1000);
	});
		
});