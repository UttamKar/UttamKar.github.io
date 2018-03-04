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


});


