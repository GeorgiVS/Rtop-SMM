$('.js-header--button').click(function () {
	$('.nav').toggleClass('nav-active');
	$('.layout-fixedBottom').toggleClass('layout-disabled');
	$('#fullpage').toggleClass('display-none');
	$('.header--button').toggleClass('header--button-active');
});