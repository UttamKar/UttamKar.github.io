$(document).ready(function(){
	/*preloader*/
		var	overlay = document.getElementById('preloader');
			window.addEventListener('load', function() {
				overlay.style.display ='none';
		});

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

	/*Navigation Bar*/
		var scroll = 0;
		$(window).on('scroll', function(){
			/*Hide header on scroll down show on scroll up*/
			if(scroll < $(window).scrollTop()){
				$("#navBar").addClass('hide-menu');
			}else{
				$("#navBar").removeClass('hide-menu');
			}
			scroll = $(window).scrollTop();
				
			/*To change bg color of navbar based on scroll*/
			var colorValueIncrement = Math.round(scroll/20) ;
			var bodyColor = $('.navbar-default').css('background');
			var lastComma = bodyColor.lastIndexOf(',');
			var newColor = bodyColor.slice(0, lastComma + 1) + Math.round(colorValueIncrement) + ')';
			$('.navbar-default').css({'background': newColor});

		});
	/*Navbar button toggle*/
		$('#navBar button').click(function(){
			$(this).toggleClass('active');
		});



	/*Wow Js activation*/
		new WOW().init();

	/*pen delayed fadeIn*/
		$( ".pen" ).slideUp( 300 ).delay( 800 ).fadeIn( 300 );

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

	/*Social Icon Visibility on scroll*/
		$(window).on('scroll', function(){
			var scroll = $(window).scrollTop();
			if(scroll > $('.socialIconSidebar').offset().top - ($(window).height()/2)){
				$('.socialIconSidebar ul').css({'transform' : 'translate(0%, -50%)'});
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





			if($(window).width() < 576){
				$('.searchBox, .gmap, .pen, .single-box, form.wow, form .wow, .contactDetails, .workSection .col-md-12').removeClass('slideInRight').removeClass('slideInLeft').removeClass('bounceInUp').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp');
			}
		

});


