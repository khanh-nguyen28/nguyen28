
$(document).ready(function() {

	$('li a').click(function(event) {
	event.preventDefault();

	part = $(this).attr('href');

	position = $(part).offset().top;

	$('html, body').animate({scrollTop: position-70},1000,'easeInOutQuad');
	});

	$(window).scroll(function(event) {
		/* Act on the event */
		var pos_body = $('html,body').scrollTop();
		
		if(pos_body>100){
			$('ul').addClass('sticky');
		}
		else {
			$('ul').removeClass('sticky');
		}

		if(pos_body>=500)
			$('.back-to-top').addClass('show');
		else {
			$('.back-to-top').removeClass('show');
		}
		if(pos_body>300){
			$('.title').addClass('fadeIn animated');
		}
		if(pos_body>400){
			$('.up').addClass('fadeIn animated');
		}
		if(pos_body>600){
			$('.grid-col').addClass('fadeInRight animated');
		}
		if(pos_body>800){
			$('.contact').addClass('fadeInLeft animated');
		}
		if(pos_body>800){
			$('.map').addClass('fadeInRight animated');
		}

		if(pos_body<100){
			$('.contact').removeClass('fadeInLeft animated');
			$('.title,.up').removeClass('fadeIn animated');
			$('.grid-col,.map').removeClass('fadeInRight animated');
		}
	});

	$('.back-to-top').click(function(event) {
		$('html,body').animate({
			scrollTop : 0},
			500);
	});

});