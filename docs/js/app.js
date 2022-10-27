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

	const swiperProductThumbs = new Swiper('.product-thumbs__swiper', {

		slidesPerView: 'auto',
		spaceBetween: 8,

	});
	const swiperProduct = new Swiper('.product-slider__swiper', {

		slidesPerView: 1,
		draggable: true,

		navigation: {
			hide: false,
			nextEl: '.product-slider__btn-next',
			prevEl: '.product-slider__btn-prev',
		  },

		thumbs: {
			swiper: swiperProductThumbs,
		  },
	});

	const swiperProducts = new Swiper('.products-slider', {

		slidesPerView: 1,
		draggable: true,
		loop: true,
		breakpoints: {
			1199: {
				slidesPerView: 4,
				spaceBetween: 30,
				autoHeight: true,
			},
			991: {
				slidesPerView: 3,
				autoHeight: true,
			},
			767: {
				slidesPerView: 2,	
				autoHeight: true,				
			},
			575: {
				autoHeight: true,	
			}
		},

		pagination: {
			el: '.products-slider__pagination',
			clickable: true,
		},

		navigation: {
			hide: false,
			nextEl: '.products-slider__btn-next',
			prevEl: '.products-slider__btn-prev',
		  },

	});
	// Аккардион FAQ
	$('.faq__btn').click(function(){	 
		$(this).toggleClass('active');	
		$(this).parent().next().slideToggle();	
	});
	
	// Tabs
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn().addClass('active');

	});

	// Прокрутка наверх страницы
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.button-up').addClass('scroll');
		} else {
			$('.button-up').removeClass('scroll');
		}
	});
	$('.button-up').click(function(){
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
	});

	// Модалки
	const link = ".link-modal-js";
	$(link).fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		autoFocus: false,
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад" 

			}
		}
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	});
	$.fancybox.defaults.backFocus = false;

// mask for input
	let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
	InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
	Inputmask("+7(999)999-99-99", {
		showMaskOnHover: false
	}).mask(InputTel);


}