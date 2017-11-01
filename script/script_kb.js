function loadApp() {

	var flipbook = $('.flipbook');

 	// Check if the CSS was already loaded
	
	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	$('.flipbook .double').scissor();


	$('.flipbook').turn({

			elevation: 50,
			

			gradients: true,
			

			autoCenter: true

	});
}

yepnope({
	test : Modernizr.csstransforms,
	yep: ['../../script/turn.min.js'],
	nope: ['../../script/turn.html4.min.js'],
	both: ['../../script/scissor.min.js', '../../style/kinderboek.css', '../../style/main.css', '../../font/fonts.css'],
	complete: loadApp
});
