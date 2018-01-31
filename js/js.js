var height = $('.header.enable-child-menu').height();
$(window).scroll(function() {
	if (height <= $(window).scrollTop()) {
		$('.header').addClass('active');
	} else {
		$('.header').removeClass('active child-menu column');
	}
});
$('.header .bottom-menu .sort a.column').on('click', function() {
	if (this.switch) {
		this.switch = 0
		$('.header').removeClass('child-menu column up');
	} else {
		this.switch = 1
		$('.header').removeClass('up')
		$('.header').addClass('child-menu column');
	}
});
$('.header .bottom-menu .sort a.up').on('click', function() {
	if (this.switch) {
		this.switch = 0
		$('.header').removeClass('child-menu column up');
	} else {
		this.switch = 1
		$('.header').removeClass('column')
		$('.header').addClass('child-menu up');
	}
});


$('.header .child-menu .column-menu a.column-one').on('click', function() {
	$('.main .main-product-list').addClass('column-one');
});
$('.header .child-menu .column-menu a.column-two').on('click', function() {
	$('.main .main-product-list').removeClass('column-one');
});


$('.header .bottom-menu .sort a.menu,.header .top-menu a.menu').on('click', function() {
	$('.menu-box-layout,.menu-box').addClass('active');
	fix_screen('hide');
	$('body').on('click', function(event) {
		if ($(event.target).hasClass('menu-box-layout')) {
			$('.menu-box-layout,.menu-box').removeClass('active');
			fix_screen();
		}
	});
});


function fix_screen(hide) {
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if (hide == 'hide') {
		document.documentElement.style.overflow = 'hidden';
		$('body').addClass('active').css('top', '-' + top + 'px');
	} else {
		$('body').removeClass('active');
		document.documentElement.style.overflow = 'auto';
		document.documentElement.scrollTop = -parseInt($('body').css('top'));
		document.body.scrollTop = -parseInt($('body').css('top'));
	}
}

$('.menu-box .wrap .search').on('click', function() {
	$('.menu-box-layout').trigger('click');
	$('.search-box').removeAttr('hidden');
});
$('.search-box').on('click', function() {
	$('.search-box').attr('hidden', '1');
});
$('.search-box .box').on('click', function(event) {
	event.preventDefault();
	return false;
});



$('.main .shoping-car-step-two .submit .help').on('click', function() {
	$('.back-order').removeAttr('hidden')
});
$('.back-order .wrap .row a').on('click', function() {
	$('.back-order').attr('hidden', '0')
});


$('.main .shoping-car-step-two .invoice-data .btn-group a.dianzi').on('click', function() {
	$('.main .shoping-car-step-two .invoice-data .wrap').removeAttr('hidden');
});
$('.main .shoping-car-step-two .invoice-data .btn-group a.gift').on('click', function() {
	$('.main .shoping-car-step-two .invoice-data .wrap').attr('hidden', '0');
});


$('.main .shoping-car .pay-mode .row .item').on('click', function() {
	// console.log($(this).toggleClass('active').siblings())
	$(this).toggleClass('active').siblings().removeClass('active');
});
