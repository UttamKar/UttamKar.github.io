jQuery(document).ready(function($){
	
	/*Equal Height*/
	$('#fourthSection > .row > div').equalHeights();
	

	/*Navbar button toggle*/
	$('#navBar button').click(function(){
		$(this).toggleClass('active');
	});

	



	/*Navigation Bar*/
		var scroll = 0;
		$(window).on('scroll', function(){
			/*Hide header on scroll down show on scroll up*/
			if(scroll < $(window).scrollTop()){
				$("#navBar").css({'transform' : 'translateY(-100%)'});
			}else{
				$("#navBar").css({'transform' : 'translateY(0)'});
			}
			scroll = $(window).scrollTop();
				
			/*To change bg color of navbar based on scroll*/
			var colorValueIncrement = 100 + Math.round(scroll/60) ;
			var bodyColor = $('.navbar-default').css('background');
			var lastComma = bodyColor.lastIndexOf(',');
			var newColor = bodyColor.slice(0, lastComma + 1) + Math.round(colorValueIncrement) + ')';
			$('.navbar-default').css({'background': newColor});
			console.log(newColor);

		});
	/*Navbar button toggle*/
		$('#navBar button').click(function(){
			$(this).toggleClass('active');
		});
})