$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		loop: true,
	    margin: 0,
	    dots: true,
	    nav: false,
	    navSpeed: 750,
	    dotsSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    items: 1,
	    autoplay: true,
		autoplayTimeout: 5000,
	})


	// Слайдер информации
	$('.section_info .slider').owlCarousel({
		loop: true,
	    margin: 20,
	    dots: true,
	    nav: false,
	    navSpeed: 750,
	    dotsSpeed: 750,
	    smartSpeed: 750,
	    items: 1
	})


	// Моб. меню
	$('header .mob_menu_link').click(function(e){
    	e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().slideUp(200)
		} else{
			$(this).addClass('active').next().slideDown(300)
		}
    })


    //Табы
	$(".tabs_container").each(function(){
		$(this).find(".tab_content:first").show()
	})
		
	$(".tabs_container .tabs li").click(function() {
		var parentBox = $(this).parents('.tabs_container')
		
		$(parentBox).find(".tabs li").removeClass("active")
		$(this).addClass("active")
		$(parentBox).find(".tab_content").hide()
	
		var activeTab = $(this).find("a").attr("href")
		$(activeTab).fadeIn()

		return false
	})


	//Аккардион
	$('.accordion .open_sub').click(function(e){
		e.preventDefault()

		if($(this).hasClass('active')){
			$(this).removeClass('active').next().slideUp(300)
		}else{
			$('.accordion .open_sub').removeClass('active')
			$('.accordion .on').slideUp(300)
			$(this).addClass('active').next().slideDown(300)
		}
	})
    

	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				speed: 300,
				autoFocus : false,
				i18n : {
					'en' : {
						CLOSE : 'Закрыть'
					}
				},
				touch : false
			}
		})
	})

	/*$('.form form').submit(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : '#modal_thank',
			type : 'inline',
			opts : {
				speed: 300,
				autoFocus : false,
				touch : {
					vertical : false,
					momentum : false
				},
				i18n : {
					'en' : {
						CLOSE : 'Закрыть'
					}
				}
			}
		})
	})
*/

	//маска телефона
	$('input[type=tel]').mask('+7   9 9 9   9 9 9 9 9 9 9')


	//Плавный скролинг к якорю
	$('a.scroll_link').click(function(){
	    var anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 500)

	    return false
	})


	//Полоса прокрутки
	$('.scroll_modal').slimScroll({
        height 		  : '448px',
        size 		  : '4px',
		color		  : '#180b46',
		distance: '4px',
		alwaysVisible: true,
		railVisible: true,
		disableFadeOut: true,
		allowPageScroll: true,
		railOpacity: 1,
		railColor: '#d2d2d2',
    })
})

$(window).scroll(function(){
	// Кнопка 'Вверх'
	if( $(this).scrollTop() > $(window).innerHeight() ){
		$('.buttonUp').fadeIn(300)
	} else {
		$('.buttonUp').fadeOut(200)
	}

	// Шапка
	if( $(window).width() > 1023 && $(window).scrollTop() > 0 ) {
		$('header').addClass('fixed')
	}else{
		$('header').removeClass('fixed')
	}
})



$(document).ready(function(){
    $("form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
	
	e.preventDefault()
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
				   yaCounter47076807.reachGoal('lead-sent');
				   
                 		$.fancybox.close()
		$.fancybox.open({
			src  : '#modal_thank',
			type : 'inline',
			opts : {
				speed: 300,
				autoFocus : false,
				touch : {
					vertical : false,
					momentum : false
				},
				i18n : {
					'en' : {
						CLOSE : 'Закрыть'
					}
				}
			}
		})
				 
				 
				 
				 
            }
    });
});  

}); 