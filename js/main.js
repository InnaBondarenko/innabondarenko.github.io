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


$('.inline-popup').magnificPopup({
	type: 'inline'
});


// отправка формы
	$.validator.addMethod('uaphone', function(value, element, params){
		var regex = /\+38 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g;
		var match = value.match(regex);
		if (match!==null) {
			if (match.length === 1) return true;
		}
		return false;
	});
	
	$('input[name="phone"]').mask('+38 (999) 999-99-99');
	$(document).ready(function() {
		var forms = document.getElementsByTagName('form');
		for (var i = 0; i < forms.length; i++) {
			$(forms[i]).validate({
				rules: {
					phone: {
						required: true,
						uaphone: true,
					},
				},
				messages: {
					name: {
						required: "Введите Ваше имя",
						uaphone: "Введите Ваше имя",
					},
					phone: {
						required: 'Введите номер телефона',
						uaphone: 'Введите номер телефона'
					}
				},
				submitHandler: submitForm
			});
		};
	});

	function submitForm(form, e){
		e.preventDefault();
		var data = $(form).serialize();
		var text = $(form).find('button[type="submit"]').html();
		var page = $(form).find('[name="tagmanager"]').val();
		$(form).find('[name="tagmanager"]').remove();
		$.ajax({
			url: 'sendform.php',
			type: 'POST',
			data: data,
			beforeSend: function(){
				$(form).find('input, button[type="submit"]').attr('disabled', '');
				$(form).find('button[type="submit"]').html('Отправляю...');
			}
		})

		.done(function(response) {
			$(form).find('input, button').removeAttr('disabled');
			$(form).find('[name="phone"]').val('');
			$(form).find('button[type="submit"]').html(text);
			$(form).find('input, button[type="submit"]').attr('disabled', '');
			$(form).find('button[type="submit"]').html('Отправлено');
			$('[data-type="modal"]').removeClass('active');
			$('#response-modal').addClass('active');
			var linkP = $(form).attr('data-formlink')
			if($(form).hasClass('catalog_form_cat')){
				$(location).attr('href', 'files/Ameli_catalog.pdf');
			}
			if($(form).hasClass('catalog_form_flacon')){
				$(location).attr('href', 'files/PRICE - Flakon.xls');
			}
			if($(form).hasClass('header_form_price')){
				$(location).attr('href', 'files/Ameli_price-list.pdf');
			}
			
			setTimeout(function(){
				$('#response-modal').css('display', 'block');
			}, 500);
			
			setTimeout(function(){
				$('#response-modal').fadeOut(1000);
			}, 2500);

			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
				$(form).find('input, button').removeAttr('disabled');
			}, 1000);
			
			dataLayer.push({
				'event' : 'VirtualPageview',
				'virtualPageURL' : page,
				'virtualPageTitle' : page.replace('/', '')
			});
		})
		.fail(function(response) {
			console.log(response);
			$(form).find('button[type="submit"]').html('Не вышло :(');
		});
	}
});

$(document).on('click', function(e) {

	if(e.target.className === "menu" || !$(e.target).closest('.menu-icon').length == 0) {
		return false;
	}else {
		$('.menu.menu-open').removeClass('menu-open');
	}

});