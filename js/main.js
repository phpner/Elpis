jQuery(document).ready(function($) {
	var sittengs = {
		siter1:{
			loop:false,
			dots: false,
			margin:10,
			items:1,
			nav:true,
			navText: ['<span class=\'prev-go\'></span>','<span class=\'next-go\'></span>']
		},
		siter2:{
			loop:true,
			dots: false,
			margin:10,
			nav:true,
			navText: ['<span class=\'prev-p\'></span>','<span class=\'next-p\'></span>'],
			responsive:{
			     0:{
			         items:1
			     },
			     480:{
			         items:2
			     },
			     1200:{
			         items:3
			     }
			 }
		}
	   
	}
	
	$(".slider2").owlCarousel(sittengs.siter2);
	sliderInit();

	$(window).resize(function(event) {
		sliderInit();
	});

	function sliderInit(){

		var widthW = $(window).innerWidth();

		if (widthW <= 800){

			$(".slider1").owlCarousel(sittengs.siter1);

		}else{

			$(".slider1").owlCarousel('destroy');

		}		
		
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
