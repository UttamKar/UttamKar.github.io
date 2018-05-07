jQuery(document).ready(function($){
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
	
	/*Navbar button toggle*/
		$('#navBar button').click(function(){
			$(this).toggleClass('active');
		});;
	



	/*Navigation Bar*/
		var scroll = 0;
		$(window).on('scroll', function(){
			/*Hide header on scroll down show on scroll up*/
			/*if(scroll < $(window).scrollTop()){
				$(".navbar").css({'transform' : 'translateY(-100%)'});
			}else{
				$(".navbar").css({'transform' : 'translateY(0)'});
			}*/
			scroll = $(window).scrollTop();
				
			/*To change bg color of navbar based on scroll*/
			var colorValueIncrement = 100 + Math.round(scroll/60) ;
			var bodyColor = $('.navbar-default').css('background');
			var lastComma = bodyColor.lastIndexOf(',');
			var newColor = bodyColor.slice(0, lastComma + 1) + Math.round(colorValueIncrement) + ')';
			$('.navbar-default').css({'background': newColor});
			console.log(newColor);

		});
	


	/*Equal Height*/
		$('#fourthSection > .row > div').equalHeights();

	/*parallax effect activation*/
		$('.parallax-window').parallax();

	/*Wow Js activation*/
		new WOW().init();
		
});



/*Smooth Scrolling*/
	$('.slide-section').click(function(e){
			e.preventDefault();

			var linkHref = $(this).attr('href');

			$('body, html').animate({
				scrollTop: $(linkHref).offset().top - $('.navbar').outerHeight()
			}, 1000);
		});


