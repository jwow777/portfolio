$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.slide1').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.slide2').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#slide2').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.slide3').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#slide3').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
});

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#slide2').offset().top - (($('#slide3').offset().top - $('#slide2').offset().top) / 2);
	var section3Top =  $('#slide3').offset().top - (($(document).height() - $('#slide3').offset().top) / 2);;
	$('nav a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav a.slide1').addClass('active');
		$('.footer').fadeIn(400)
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav a.slide2').addClass('active');
		$('.footer').fadeIn(400)
	} else if ($(document).scrollTop() >= section3Top){
		$('nav a.slide3').addClass('active');
		$('.footer').fadeOut(200)
	}
	
}

/* Scroll the background layer */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax').css('top',(0-(scrolled*.9))+'px');
}

/* Scroll footer */
/*$(document).ready(function() {	
	$(window).scroll(function(){
		if($(window).scrollTop()>1300){
			$('.footer').fadeOut(200)
		} else {
			$('.footer').fadeIn(400)
		}
	});
});*/
