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

	/*Search Box*/
		searchBox();
		$(window).resize(function() {
			searchBox();
		});

		function searchBox() {
			if($(window).width()<576){
				$('.searchOne').css({'z-index': '-1'});
				$('.searchTwo').css({'z-index': '11'});
			}else{
				$('.searchTwo').css({'z-index': '9'});
				$('.searchOne').css({'z-index': '10'});
			}
		}

	/*Our Team Section*/

		$('.view').on('click', function(){
			$(this).parents(".profile").children('.details').addClass('active');
			/*$(this).find('~.details').addClass('active');*/
			$(this).css({'display' : 'none'});
		});
		$('.close').on('click', function(){
			$(this).parent().removeClass('active');
			$(this).parents(".profile").children(".view").css({'display' : 'block'});
		});

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


	/*Count-To Activation*/
		var counter = function() {
			$('.counter').countTo({
				 formatter: function (value, options) {
		      return value.toFixed(options.decimals);
		    },
			});
		};


		if ($('.happtClient').length > 0 ) {
			$('.happtClient').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}


	
});