$(document).ready(function(){
	/*preloader*/
    	$( window ).on( "load", function() {
			$("#preloader").delay(1000).fadeOut("slow");
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

	/*Top Section*/
		$(window).scroll(function(){
			var scroll = parseInt($(this).scrollTop());
			var width = 400 - scroll/2;
			$('.jet').css({'right': scroll/4 + '%', 'width' : width +'px'});
		});

	/*Top Section opacity reduction*/
		if ($(window).width() > 992) {
	        
	        $(window).on('scroll', function() {
	            $('.topSection').css('opacity', function() {
	                return 1 - ($(window).scrollTop() / $(this).outerHeight());
	            });
	        });
	    };

	/*Top Section Background Slideshow images (backstretch.min.js Activation) */
	    $(".topSection").backstretch([
	        "img/first-template/bg.jpg",
	        "img/bg3.jpg",
	        "img/bg4.jpg"
	        
	    ], {
	        fade: 1000,
	        duration: 4000
	    });


	/*Textrotator*/
	    $(".rotate").textrotator({
	        animation: "dissolve", //fade
	        separator: ",",
	        speed: 5000
	    });

	/*countdown section*/
	    $('.countdown').downCount({
	        date: '12/15/2019 12:00:00' // m/d/y
	    });

	/*For product section*/
	    $('.slick-carousel').slick({
			autoplay: true,
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			prevArrow: false,
			nextArrow: false
		});


	/*Clock & Social Icon Section*/
		var radialObj = radialIndicator('#clock', {
		    radius: 80,
		    barWidth: 10,
		    barColor: '#FF0000',
		    minValue: 0,
		    maxValue: 60,
		    fontWeight: 'normal',
		    roundCorner: true,
		    format: function (value) {
		        var date = new Date();
		        return date.getHours() + ':' + date.getMinutes();
		    }
		});
		 
		setInterval(function () {
		    radialObj.value(new Date().getSeconds() + 1);
		}, 1000);


	/*parallax effect activation*/
		$('.parallax-window').parallax();


	/*Navbar fix at top on scroll*/
	    $(window).bind('scroll', function() {
	        var headerHeight = $('.topSection').outerHeight();

	        $('.navbar').wrap('<div class="nav-placeholder"></div>');
			$('.nav-placeholder').height($('.navbar').outerHeight());

	        if ($(window).scrollTop() > headerHeight) {
	            $('.navbar-default').addClass('on');
	        } else {
	            $('.navbar-default').removeClass('on');
	        }
	    });
    /*Smooth Scrolling*/
		$('a.page-scroll').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	          if (target.length) {
	            $('html,body').animate({
	              scrollTop: target.offset().top - 49
	            }, 900);
	            return false;
	          }
	        }
	      });
	/*Navbar item select one by one on scroll*/
		$(window).on('scroll', function(){
			var product = $('#product').offset().top;
			var offer = $('#offer').offset().top;
			var location = $('#location').offset().top;
			var contact = $('#contact').offset().top;
			var activeLi;
			console.log(offer);

			var scroll = $(window).scrollTop();
			var navbarHeight = $('.navbar').outerHeight();

			if(scroll < (product - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(1)');
			}else if(scroll < (offer - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(2)');
			}else if(scroll < (location - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(3)');
			}else if(scroll < (contact - navbarHeight)){
				activeLi = $('.navbar .nav>li:nth-child(4)');
			}else{
				activeLi = $('.navbar .nav>li:nth-child(5)');
			}
			activeLi.addClass('active');
			$('.navbar .nav>li').not(activeLi).removeClass('active');
		});


	/*Nivo Slider Activation*/
		$('#slider').nivoSlider({
			manualAdvance: false,
			directionNav: true,
			controlNav: false,
			prevText: '<span class="glyphicon glyphicon-arrow-left"></span>',
			nextText: '<span class="glyphicon glyphicon-arrow-right"></span>'
		});
	/*Wow Js activation*/
		if ($(window).width() > 676) {
	        new WOW().init();
	    };


    
		
});