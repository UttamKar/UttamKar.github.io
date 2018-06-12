$(document).ready(function(){
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
		if ($(window).width() > 676) {
	        new WOW().init();
	    };


	/*Match Height*/
		$('.single-education').matchHeight({
			byRow: false,
		});


	/*Social Icon Visibility on scroll*/
		$(window).on('scroll', function(){
			var scroll = $(window).scrollTop();
			if(scroll > $('.socialIconSidebar').offset().top - ($(window).height()/2)){
				$('.socialIconSidebar ul').css({
					'-webkit-transform' : 'translate(0%, -50%)', 
					'-moz-transform' : 'translate(0%, -50%)', 
					'-ms-transform' : 'translate(0%, -50%)', 
					'-o-transform' : 'translate(0%, -50%)', 
					'transform' : 'translate(0%, -50%)'
				});
			}else{
				$('.socialIconSidebar ul').css({
					'-webkit-transform' : 'translate(-100%, -50%)', 
					'-moz-transform' : 'translate(-100%, -50%)', 
					'-ms-transform' : 'translate(-100%, -50%)', 
					'-o-transform' : 'translate(-100%, -50%)', 
					'transform' : 'translate(-100%, -50%)'
				});
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


	/*parallax effect activation*/
		
		if ($(window).width() > 676) {
	        $('.parallax-window').parallax();
	    };



	////////////////////////////////////////////////////
	/*Isotope Activation*/
		var $grid = $('.work-list').isotope({
			itemSelector: '.single-latest-work',
			mesonry: {
		  		columnWidth: '.single-latest-work'
			}
		});
	/*filter items on button click*/
		$('.filter-button').on( 'click', 'button', function() {
		    var filterValue = $(this).attr('data-filter');
		    $grid.isotope({ filter: filterValue });
		});
	/*button selection*/
		$('.filter-button button').click(function(){
			$('.filter-button button').removeClass('activeBtn');
			$(this).addClass('activeBtn');
		});
	

	/*Oul-carousel Activation*/
		$(".owl-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			/*center: true,
			autoWidth: true,*/
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
		            items:2,
		            nav:true
		        }
		    }
		});


	/*Navbar item select one by one on scroll*/
		$(window).on('scroll', function(){
			var education = $('#education').offset().top;
			var experience = $('#experience').offset().top;
			var experties = $('#experties').offset().top;
			var works = $('#works').offset().top;
			var latest = $('#latest').offset().top;
			var skills = $('#skills').offset().top;
			var contact = $('#contact').offset().top;
			var activeLi;

			var scroll = $(window).scrollTop();
			var navbarHeight = $('.navbar').outerHeight();

			if(scroll < (education - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(1)');
			}else if(scroll < (experience - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(2)');
			}else if(scroll < (experties - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(3)');
			}else if(scroll < (works - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(4)');
			}else if(scroll < (latest - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(5)');
			}else if(scroll < (skills - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(6)');
			}else if(scroll < (contact - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(7)');
			}else{
				activeLi = $('.navbar .nav>li:nth-child(8)');
			}
			activeLi.addClass('active');
			$('.navbar .nav>li').not(activeLi).removeClass('active');
		});



	/*Smooth Scrolling*/
		$('.slide-section').click(function(e){
			e.preventDefault();

			var linkHref = $(this).attr('href');

			$('body, html').animate({
				scrollTop: $(linkHref).offset().top + 1
			}, 1000);
		});


});


