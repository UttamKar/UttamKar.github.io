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
   if($(window).width() > 576){
		$("#zoom_03").elevateZoom({
		  zoomType	: "lens",
		  lensShape : "round",
		  lensSize    : 150
		});
	}

	/*Smooth Scrolling*/
		$('.slide-section').click(function(e){
			e.preventDefault();

			var linkHref = $(this).attr('href');

			$('body, html').animate({
				scrollTop: $(linkHref).offset().top
			}, 1000);
		});


	/*Social Icon Visibility on scroll*/
		$(window).on('scroll', function(){
			var scroll = $(window).scrollTop();
			if(scroll > $('.socialIconSidebar').offset().top - ($(window).height()/2)){
				$('.socialIconSidebar ul').css({'transform' : 'translate(-50%, -50%)'});
			}else{
				$('.socialIconSidebar ul').css({'transform' : 'translate(-100%, -50%)'});
			}
		});
		$('.closeBtn').click(function(){
			$('.socialIconSidebar ul li a').css({'transform' : 'translate(-100%, -50%) rotate(360deg)'});
			$('.socialIconSidebar ul li:nth-child(1) a').css({'transition-delay' : '.1s'});
			$('.socialIconSidebar ul li:nth-child(2) a').css({'transition-delay' : '.2s'});
			$('.socialIconSidebar ul li:nth-child(3) a').css({'transition-delay' : '.3s'});
			$('.socialIconSidebar ul li:nth-child(4) a').css({'transition-delay' : '.4s'});
			$('.socialIconSidebar ul li:nth-child(5) a').css({'transition-delay' : '.5s'});
			$('.socialIconSidebar ul li:nth-child(6) a').css({'transition-delay' : '.6s'});
			
			setTimeout(function(){
				$('.socialIconSidebar ul').css({'display' : 'none'});
			},800);
		});
		
});