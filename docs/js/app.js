window.onload = function () {

	// Кнопки в шапке
    $('.body-header__menu-mobile').click(function () {
        $(this).toggleClass('active');
		$('.bottom-header').toggleClass('active');
		$('body').toggleClass('fixed-mb');
	});

    $('.header-nav__link-icon').click(function () {		
		let parent = $(this).parents('.header-nav__item');
        parent.toggleClass("active");
		parent.children(".header-nav__submenu").slideToggle();
	});


    $(".top-header__search-mobile").click(function (e) {
		$(this).toggleClass("active");
		$(".body-header__search").slideToggle().find('input').focus();
	});

	// Кнопка скрытия содержимого
	$('.prod-item__collaps-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).prev().toggleClass('collapsed');
    });

	// Слайдеры

	const servicesSlider = new Swiper('.services-block__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		autoHeight: true,

		navigation: {
			hide: false,
			nextEl: '.services-block__slider-btn-next',
			prevEl: '.services-block__slider-btn-prev',
		},

		pagination: {
			el: '.services-block__slider-pagination',
			clickable: true,
		},
		
		breakpoints: {

			1199: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			575: {
				slidesPerView: 2,	
				spaceBetween: 20,
			}
		},
	});

}