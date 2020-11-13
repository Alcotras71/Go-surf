$(function(){

	$('.header__slider').slick({
		infinite: true,
		fade: true,	
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/main/arrow-left.svg" alt="arrow-left" />',
		nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="images/main/arrow-right.svg" alt="arrow-rigth" />',
		asNavFor: '.slider-dots',
		dots: true
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header-slider',
	});

});