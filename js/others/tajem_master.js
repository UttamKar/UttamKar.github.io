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
		$('.navbar button').click(function(){
			$(this).toggleClass('active');
		});
		$('.navbar ul.nav li a').click(function(){
			$('.navbar-collapse').removeClass('in');
		});
	



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

	/* WOW activation */

	    var wow = new WOW({
	        mobile: false // trigger animations on mobile devices (default is true)
	    });
	    wow.init();





		
});




	

	/*Navbar item select one by one on scroll*/
		$(window).on('scroll', function(){
			var story = $('#story').offset().top;
			var expertise = $('#expertise').offset().top;
			var team = $('#team').offset().top;
			var works = $('#works').offset().top;
			var contact = $('#contact').offset().top;
			var activeLi;

			var scroll = $(window).scrollTop();
			var navbarHeight = $('.navbar').outerHeight();

			if(scroll < (story - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(1)');
			}else if(scroll < (expertise - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(2)');
			}else if(scroll < (team - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(3)');
			}else if(scroll < (works - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(4)');
			}else if(scroll < (contact - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(5)');
			}else{
				activeLi = $('.navbar .nav>li:nth-child(6)');
			}
			activeLi.addClass('active');
			$('.navbar .nav>li').not(activeLi).removeClass('active');
		});



	/*Smooth Scrolling*/
		$('.slide-section').click(function(e){
			e.preventDefault();

			var linkHref = $(this).attr('href');

			if ($(window).width() < 767) {
			   $('body, html').animate({
					scrollTop: $(linkHref).offset().top - 50
				}, 1000);
			}
			else {
			   $('body, html').animate({
					scrollTop: $(linkHref).offset().top - $('.navbar').outerHeight()+1
				}, 1000);
			}
			
		});