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

	$('.surf__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/main/arrow-left.svg" alt="arrow-left" />',
		nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="images/main/arrow-right.svg" alt="arrow-rigth" />',
		asNavFor: '.slider-map'
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf__slider',
		focusOnSelect: true
	});

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,	
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/main/arrow-left.svg" alt="arrow-left" />',
		nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="images/main/arrow-right.svg" alt="arrow-rigth" />'
	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/sleep/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/sleep/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
			});
		});
		
		$('.quantity-button').on('click', function(){
			const parents = $(this).parents('.holder-slider__info');
			let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
			$('.summ', parents).html('$' + summ);
		});

		$('.quantity').each(function() {
			const parents = $(this).parents('.holder-slider__info');
			let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
			$('.summ', parents).html('$' + summ);
		});

		$('.surfboard-box__circle').on('click', function(){
			$(this).toggleClass('active');
		});

		$('.menu-btn').on('click', function(){
			$('.aside-menu').toggleClass('active');
			$(this).toggleClass('active');
		})
});