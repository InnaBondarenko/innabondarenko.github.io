$(document).ready(function(){

	$(".menu-main").on("click","a", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href');
		var top = jQuery(id).offset().top;
		$('.menu.menu-open').removeClass('menu-open');
		$('body,html').animate({scrollTop: top - 40}, 800);
	});

	$('.menu-icon').on('click', function() {
		$(this).closest('.menu').toggleClass('menu-open');
	});

});

$(document).on('click', function(e) {

	if(e.target.className === "menu" || !$(e.target).closest('.menu-icon').length == 0) {
		return false;
	}else {
		$('.menu.menu-open').removeClass('menu-open');
	}

});