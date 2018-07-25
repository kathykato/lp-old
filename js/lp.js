$(document).ready(function(){
    // jQuery.easing scroll
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

	// Slider
	$("#slider").responsiveSlides({
		auto:true,
		nav: false,
		speed: 800,
		namespace: "slider-indicator",
		pager:true,
	  });
	  
    // Simple Light Box
    var gallery = $('.portfolio-container a').simpleLightbox({
        navText: ['<i class="icon-chevron-left"></i>', '<i class="icon-chevron-right"></i>'],
        closeText: '<i class="icon-cross"></i>',
	});
});