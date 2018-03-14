$(document).ready(function(){

	/*Header text animation*/
    $('.topImage h1').textillate({
    	loop: true,
    	minDisplayTime: 3000,
    	initialDelay: 500,
    	autoStart: true,
    	in: {
		  	// set the effect name
		    /*effect: 'rollIn',*/

		    // set the delay factor applied to each consecutive character
		    delayScale: 1.5,

		    // set the delay between each character
		    delay: 50,

		    shuffle: false,

		    // reverse the character sequence
		    // (note that reverse doesn't make sense with sync = true)
		    reverse: false,

		    // callback that executes once the animation has finished
		    callback: function () {
		    	$('.topImage h1').css({
		    		'-webkit-text-stroke-width' : '2px',
		    		'-webkit-text-fill-color' : 'rgba(111,222,150,0.5)',
		    		'color' : 'yellow'
		    	});
		    }
		},
		out: {
		    /*effect: 'hinge',*/
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {$('.topImage h1').css({
		    	'-webkit-text-stroke-width' : '0',
		    	'-webkit-text-fill-color' : 'white',
		    	'color' : 'white'
			    });
			}
		},
    });



    /*parallax effect activation*/
		$('.parallax-window').parallax();


	/*Top Image section flower fall (sakura) activation*/
	    $('body').sakura('start', {
	        className: 'sakura', // Class name to use
	        fallSpeed: 1,        // Factor for petal fall speed
	        maxSize: 30,         // Maximum petal size
	        minSize: 10,          // Minimum petal size
	        newOn: 300
	    });


	/*Navigation Bar*/
		$(window).on('scroll', function(){
			var scroll = $(window).scrollTop();
			var headerHeight = $('.topImage').outerHeight();
			/*var navOffset = $('.navbar').offset().top;*/

			$('.navbar').wrap('<div class="nav-placeholder"></div>');
			$('.nav-placeholder').height($('.navbar').outerHeight());

			if(scroll>headerHeight){
				$('.navbar').addClass('nav-effect');
				/*$('.navbar').addClass('navbar-fixed-top');*/
			}else{
				$('.navbar').removeClass('nav-effect');
				/*$('.navbar').removeClass('navbar-fixed-top');*/
			}


	/*Text Cover Section*/
		if(scroll > $('.coverText').offset().top - $(window).height()){
			$('.coverText span:nth-child(2)').css({
				'top' : -scroll/2 + 'px'
			});
			$('.coverText span:nth-child(3)').css({
				'bottom' : -scroll/2 + 'px'
			});
		}else{
			$('.coverText span:nth-child(2)').css({
				'top' : 0
			});
			$('.coverText span:nth-child(3)').css({
				'bottom' : 0
			});
		}

	/*pariscope Section*/
		if(scroll > $('.pariscope1').offset().top - $(window).height()){
			$('.pariscope1').css({'background-position' : 'center '+ (scroll - $('.pariscope1').offset().top/1.5) +'px'});
		}


	/*Card Section*/
		if(scroll > $('.cardSection').offset().top - $(window).height()){

			var offset = Math.min(0, scroll - $('.cardSection').offset().top + $(window).height()/4);

			$('.card-1').css({
				'transform' : 'translate('+ offset +'px, '+ Math.abs(offset * 0.5) +'px)'
			});
			$('.card-3').css({
				'transform' : 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) +'px)'
			});
		}

	});
		
});
