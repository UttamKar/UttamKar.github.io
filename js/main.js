jQuery(document).ready(function($){
	$('#fourthSection > .row > div').equalHeights();
	

	/*Navbat button toggle*/
	$('#navBar button').click(function(){
		$(this).toggleClass('active');
	});
})

