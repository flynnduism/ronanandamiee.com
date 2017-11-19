/* Author: Ronan Flynn */

$(document).ready(function() {
	
	
	// Menu: Rsvp Card
	
	if ($('nav').length > 0) {
		
		// setup paperfold
		var $container = $('#rsvpcard'),
		pfold = $('#rsvpcard').pfold({
			
			easing : 'ease-in-out',
			perspective : 1200,
			speed : 450,
			folds : 1,
			folddirection : ['left'],
			centered : true
			//onEndUnfolding : function() { 
									
			//return false; }
		});
		
		// close
		$("#rsvp-close").click(function(){
			//alert('it was clicked');
			
			pfold.fold();
			// $('#rsvpcard').pfold({});
			
			$('#rsvpcard').delay(800).animate({
				opacity: '0'
			}, 200 );
			
			window.setTimeout(function() {
				
				$('#rsvpcard').hide();
				
			}, 1200 );			
			
		});
		
		
		// click
		$('.rsvp, .rsvpopen').click(function(){
			$('#rsvpcard').show().animate({
				bottom: '25%'
			}, 200 ).delay(20);
			
			window.setTimeout(function() {
				
				pfold.unfold();
				
				$('#rsvpcard').animate({
					marginLeft: '0'
				}, 100);
				
				$('#rsvpcard .uc-overlay').hide();
				
			}, 1000 );			
		});
		
	};
	
	
	// Footer: Back to Top
	
	$('.backtotop').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	
	
	// Homepage: Intro Animations
	
	if ($('#home-container').length > 0) {
		
		// hide at load
		$('h1').animate({ opacity:0, marginTop: '180', marginLeft: '40' }, 2 );
		$('h3').animate({ opacity:0, marginTop: '220', zIndex: '540' }, 2 );
		$('h2').animate({ opacity:0, marginTop: '180', zIndex: '545', marginLeft: '20' }, 2 );
		
		// animate in
		$('h1').animate({ opacity:1, marginTop: '0', marginLeft: '0' }, 400 );
		$('h3').delay( 200 ).animate({ opacity:1, marginTop: '0' }, 600 ).delay( 35 ).animate({ zIndex: '600' }, 50 );
		
		$('h2').delay( 650 ).animate({ opacity:1, marginTop: '-60', marginLeft: '10' }, 400 ).delay( 35 ).animate({ zIndex: '600' }, 50 ).animate({ marginTop: '0', marginLeft: '0' }, 250 );
		
		// Hide cat
		$('img.spideog').hide().animate({ opacity:0, bottom: '-20%' }, 2 );
		
		// Show cat
		if ($('.clickus').length > 0) {
			if ($('img.spideog').is(':visible')) {
			
			} else {
				
				$('.clickus').click(function() {
					$('img.spideog').show().animate({
						opacity:1, bottom: '20%'
					}, 2000 );
				})
			}
		};
	};
	
	
	// Tooltips
	if ($('.peeps').length > 0) {
		$('.peep img[title]').tooltip({ position: "bottom center", offset: [15,0] });
	};
	
	
});


// orientation > viewport fix for mobile devices
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	var viewportmeta = document.querySelector('meta[name="viewport"]');
	if (viewportmeta) {
		viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
		document.body.addEventListener('gesturestart', function () {
			viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
		}, false);
	}
}