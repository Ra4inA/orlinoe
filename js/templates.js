// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function($){
	
	//	определение ширины и высоты окна
	
	function  getPageSize(){
       var xScroll, yScroll;
 
       if (window.innerHeight && window.scrollMaxY) {
               xScroll = document.body.scrollWidth;
               yScroll = window.innerHeight + window.scrollMaxY;
       } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
               xScroll = document.body.scrollWidth;
               yScroll = document.body.scrollHeight;
       } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight){ // Explorer 6 strict mode
               xScroll = document.documentElement.scrollWidth;
               yScroll = document.documentElement.scrollHeight;
       } else { // Explorer Mac...would also work in Mozilla and Safari
               xScroll = document.body.offsetWidth;
               yScroll = document.body.offsetHeight;
       }
 
       var windowWidth, windowHeight;
       if (self.innerHeight) { // all except Explorer
               windowWidth = self.innerWidth;
               windowHeight = self.innerHeight;
       } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
               windowWidth = document.documentElement.clientWidth;
               windowHeight = document.documentElement.clientHeight;
       } else if (document.body) { // other Explorers
               windowWidth = document.body.clientWidth;
               windowHeight = document.body.clientHeight;
       }
 
       // for small pages with total height less then height of the viewport
       if(yScroll < windowHeight){
               pageHeight = windowHeight;
       } else {
               pageHeight = yScroll;
       }
 
       // for small pages with total width less then width of the viewport
       if(xScroll < windowWidth){
               pageWidth = windowWidth;
       } else {
               pageWidth = xScroll;
       }
 
       return [pageWidth,pageHeight,windowWidth,windowHeight];
	}
	
	function screenHeight(){
		return $.browser.opera? window.innerHeight : $(window).height();
	}
	
	//	вспл. блоки слева
	
	// $('.mod_events figcaption').hover(
	// 	function(){
	// 		$(this).animate(
	// 			{
	// 				'height' : 194
	// 			},
	// 			300
	// 		);
	// 		$(this).find('.wrap').animate(
	// 			{
	// 				'height' : 194
	// 			},
	// 			300
	// 		);
	// 		$(this).addClass('hover');
	// 	},
	// 	function(){
	// 		$(this).animate(
	// 			{
	// 				'height' : 83
	// 			},
	// 			100
	// 		);
	// 		$(this).find('.wrap').animate(
	// 			{
	// 				'height' : 83
	// 			},
	// 			100
	// 		);
	// 		$(this).removeClass('hover');
	// 	}
	// );
	
	//	слайдер
	
	$(".mod_main_slider ul").carouFredSel({
		auto    : true,
		prev    : ".mod_main_slider .prev",
		next    : ".mod_main_slider .next",
		scroll  : 1
	});
	
	$(".mod_slider_1 ul").carouFredSel({
		auto    : true,
		prev    : ".mod_slider_1 .prev",
		next    : ".mod_slider_1 .next",
		scroll  : 1
	});
	
	$(".mod_slider_2 ul").carouFredSel({
		auto    : true,
		prev    : ".mod_slider_2 .prev",
		next    : ".mod_slider_2 .next",
		scroll  : 1
	});
	
	$(".mod_slider_3 ul").carouFredSel({
		auto    : true,
		prev    : ".mod_slider_3 .prev",
		next    : ".mod_slider_3 .next",
		scroll  : 1
	});
	
	$(".mod_slider_4 ul").carouFredSel({
		auto    : true,
		prev    : ".mod_slider_4 .prev",
		next    : ".mod_slider_4 .next",
		scroll  : 1
	});
	
	//	DatePicker
	
	$.datepicker.setDefaults({
		buttonImageOnly: true,
		showOn: "button",
		buttonImage: "images/tpl/datepicker.png",
		dateFormat: "dd-mm-yy",
		dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
		firstDay: 1,
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]
	});
	
    $( "#date_on" ).datepicker();
	
    $( "#date_of" ).datepicker();
	
	//	количество
	
	$('.input_num_bx .minus').click(
		function(){
			var div = $(this).closest('div');
			var input = $(div).find('input');
			var input_value = $(input).val();
			var new_value = parseInt(input_value - 1);
			if($(input).hasClass('itext_pup_num_child')){
				if(new_value <= 0){
					new_value = 0;
				}
				setAgeChild(new_value, '-');
			}
			else{
				if(new_value <= 0){
					new_value = 1;
				}
			}
			$(input).val(new_value);
			return false;
		}
	);
	
	$('.input_num_bx .plus').click(
		function(){
			var div = $(this).closest('div');
			var input = $(div).find('input');
			var input_value = $(input).val();
			var new_value = parseInt(input_value) + 1;
			if($(input).hasClass('itext_pup_num_child')){
				if(new_value > 4){
					new_value = 4;
					return false;
				}
				setAgeChild(new_value, '+');
			}
			else{
				if(new_value >= 5){
					new_value = 5;
				}
			}
			$(input).val(new_value);
			return false;
		}
	);
	
	function setAgeChild(value, type){
		console.log(value);
		var li_child = $('li.childs');
		if($(li_child).is(':hidden')){
			$(li_child).show();
			console.log('show');
		}
		if($(li_child).is(':visible')){
			if(type == '-'){
				$('input.child_age').eq(value).remove();
			}
			if(type == '+'){
				if(value <= 4){
					$(li_child).append('<input type="text" name="child_age['+value+']" value="5" class="child_age">');
				}
			}
		}
		if(value <= 0){
			$(li_child).hide();
		}
	}
	
	//	номера
	
	$('.rooms .full_info').hide();
	
	$('.open_info').click(
		function(){
			var tgl_div = $(this).closest('div.show_info');
			var tgl_info = $(tgl_div).find('.full_info');
			if($(tgl_info).is(':hidden')){
				$(tgl_info).show();
				$(this).addClass('active');
			}
			else{
				$(tgl_info).hide();
				$(this).removeClass('active');
			}
			return false;
		}
	);
	
	//	всплывающее окно
	
	var ps = getPageSize();
	$('div.pop_bg').css(
		{
			'width': '100%',
			'height': ps[1]
		}
	);
	
	var pop_win_width = $('.reservation_pop').width();
	var pop_win_height = $('.reservation_pop').height();
	
	$('.reservation_pop').css(
		{
			'top': ((ps[3]/2)-(pop_win_height/2)),
			'left': (($('body').width()/2)-(pop_win_width/2))
		}
	);
	
	$('.reservation_pop .close').click(
		function(){
			$('div.pop_bg').hide();
			$('.reservation_pop').hide();
			return false;
		}
	);
	
	//	события на кнопках
	
	$('.open_pop').click(
		function(){
			var this_open = $(this).attr('href');
			$('.pop_bg').show();
			$('.'+this_open).show();
			return false;
		}
	);
	//console.log(ps);
	
	
	
	
	
	//	вкладки
	
	var active_tabs = $('div.tabs .active a').attr('href');
	$('#'+active_tabs).show();
	
	$('div.tabs a').click(
		function(){
			$('div.tabs li').removeClass('active');
			$('.tabs_info').hide();
			var this_tabs = $(this).attr('href');
			$(this).closest('li').addClass('active');
			$('#'+this_tabs).show();
			return false;
		}
	);
	
	
});