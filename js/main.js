$(document).ready(function(){


	/*li-scroller Activation*/
	$('.li-scroller').liScroll();

	/*Count-To Activation*/
	$('.timer').countTo({
	    speed: 4000,
	    refreshInterval: 50
	});
    

	/*tabulous Activation*/
    $('#tabs').tabulous({
    	effect: 'flip'   //slideLeft, scaleUp, flip, scale
    });


    /*Gray*/
    $('.grayscale').mouseover(function() {
    	$('.grayscale').addClass('grayscale-off').css({"transition" : "all 0.5s ease-in-out"});
    });
    $('.grayscale').mouseout(function() {
    	$('.grayscale').removeClass('grayscale-off').css({"transition" : "all 0.5s ease-in-out"});
    });

    $('.colorful').mouseover(function() {
    	$('.colorful').addClass('grayscale').css({"transition" : "all 0.5s ease-in-out"});
    });
    $('.colorful').mouseout(function() {
    	$('.colorful').removeClass('grayscale').css({"transition" : "all 0.5s ease-in-out"});
    });



    /*Subscribe-me Activation*/
    $('.subscribe-me').subscribeBetter({
    	trigger: "atendpage", // atendpage | onload | onidle
	    animation: "fade", // fade | flyInRight | flyInLeft | flyInUp | flyInDown
	    delay: 0,
	    showOnce: true,
	    autoClose: false,
	    scrollableModal: false
    });


    /*Image move with mouse*/
    $(document).on('mousemove',function(e){
    	$('.cloud').parallax(5, e);
    });


   /* DirectionAwareHoverEffect Activation*/
    $('.da-thumbs li').each(function(){
    	$(this).hoverdir();
    });
   

    ////////////////////////////////////////////////////////////
    /*Star Rating*/
   $(".my-rating").starRating({
	  initialRating: 4,
	  strokeColor: '#894A00',
	  strokeWidth: 10,
	  starSize: 25
	});
   $(".my-rating-4").starRating({
	  totalStars: 5,
	  starShape: 'rounded',
	  starSize: 40,
	  emptyColor: 'lightgray',
	  hoverColor: 'salmon',
	  activeColor: 'crimson',
	  useGradient: false
	});
   $(".my-rating-5").starRating({
	  starSize: 80,
	  strokeWidth: 9,
	  strokeColor: 'black',
	  initialRating: 2,
	  starGradient: {
	      start: '#93BFE2',
	      end: '#105694'
	  }
	});
   $(".my-rating-6").starRating({
	  totalStars: 5,
	  emptyColor: 'lightgray',
	  hoverColor: 'salmon',
	  activeColor: 'cornflowerblue',
	  initialRating: 4,
	  strokeWidth: 0,
	  useGradient: false,
	  callback: function(currentRating, $el){
	      alert('rated ', currentRating);
	      console.log('DOM element ', $el);
	  }
	});

   /* read only mode*/
   $(".my-rating-7").starRating({
	  readOnly: true
	});

   /*use full stars only*/
   $(".my-rating-8").starRating({
	  useFullStars: true
	});

   $(".my-rating-9").starRating({
	    initialRating: 3.5,
	    disableAfterRate: false,
	    onHover: function(currentIndex, currentRating, $el){
	      $('.live-rating').text(currentIndex);
	    },
	    onLeave: function(currentIndex, currentRating, $el){
	      $('.live-rating').text(currentRating);
	    }
	});
   /////////////////////////////////////////////////////////////


   /*card filp Activation*/
   $(".card").flip({
	  axis: 'y',
	  trigger: 'hover'
	});
   $(".card-2").flip({
	  axis: 'y',
	  trigger: 'click',
	  /*reverse: false,
      speed: 500,
      forceHeight: false,
      forceWidth: false,
      autoSize: true,
      front: '.front',
      back: '.back'*/
	});





   //////////////////////////////////////////////////////
   /*star rating manually*/
	$('.star').mouseover(function(){
		var $this = $(this);
		var index = $this.index();
		var $stars = $('#stars');
	  
	  
	  // fill stars
	  for(var i = index; i >= 0; i--) {
	  	$stars.children('.fa').eq(i).addClass('filled');	
	  }
	  
	  // empty stars
	  for(var i = index + 1; i < 5; i++) {
	  	$stars.children('.fa').eq(i).removeClass('filled');	
	  }
	  
	});

	$('.star').mouseout(function(){
		var $this = $(this);
	    var $stars = $('#stars');
		
	  if ( ! $this.parent().hasClass('starLock')){
	  	$stars.children('.fa').removeClass('filled');
	    return;
	  }
	  
	  if( $this.parent().data('star') ){
	  
	  	var index = parseInt($this.parent().attr('data-star'));
	    
	    // fill stars
	    for(var i = index; i >= 0; i--) {
	      $stars.children('.fa').eq(i).addClass('filled');	
	    }
	    
	    // empty stars
	    for(var i = index + 1; i < 5; i++) {
	      $stars.children('.fa').eq(i).removeClass('filled');	
	    }
	  }
	});


	$('.star').click(function(){
		var $this = $(this);
	    var index = $this.index();
	    $this.parent().addClass('starLock');
	    $this.parent().attr('data-star', index);
	});
	//////////////////////////////////////////////////////////


});
