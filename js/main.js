jQuery(document).ready(function($) {
	var sittengs = {
	    loop:false,
	    dots: false,
	    margin:10,
	    items:1,
	    nav:true,
	    navText: ['<span class=\'prev-go\'></span>','<span class=\'next-go\'></span>']
	}
	

	sliderInit();

	$(window).resize(function(event) {
		sliderInit();
	});

	function sliderInit(){

		var widthW = $(window).innerWidth();

		if (widthW <= 800){

			$(".slider1").owlCarousel(sittengs);

		}else{

			$(".slider1").owlCarousel('destroy');

		}
		
		console.log($(window).innerWidth());
	}

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	
});
