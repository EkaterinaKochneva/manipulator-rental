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
}