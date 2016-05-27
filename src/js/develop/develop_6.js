function InitSlider(){
	$('.slider-vraper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true
	});

	// $('.header-background').slick({
 //  infinite: true,
 //  slidesToShow: 1,
 //  slidesToScroll: 1,
 //  dots: false,
 //  arrows: false,
 //  draggable: true,
 //  //autoplay: true,
 //  //autoplaySpeed: 4000
	// });
}

function fadeBackground(){
	var indexLength = $('.header-background div').length;
		console.log(indexLength);
	var timerFade = setInterval(function(){
		indexLength += (-1);
		console.log(indexLength);
		$('.header-background div').eq(indexLength).fadeToggle(1000);
		if(indexLength == 0){
			$('.header-background div').fadeIn(1000);
			indexLength +=6 ;
			console.log(indexLength);
		}
	},6000);
}


function fancyBoxParam (){
	$('.fancybox-form').fancybox({
		maxWidth: 1200 ,
		fitToView: true,
		autoHeight: true
		
		
		
	})
};

function dotController(){
	$('.block-scroll a').click(function(e){
		e.preventDefault();
		$('.block-scroll a').removeClass('visible');
		$(this).addClass('visible');	
	});
}
//for scroll bar
function windowCheck(item){
	$(window).scroll(function(){

		var windowTop = $(window).scrollTop()+($('header').outerHeight()/1.5);

		item.each(function(){
			if(windowTop >= $(this).offset().top && $(this).offset().top+$(this).outerHeight()>windowTop){

				var itemSection = $(this);
				var identifire = itemSection.attr('id');
				
				$('header .block-scroll a:not([href="#'+identifire+'"])').removeClass('visible');
				$('header .block-scroll a[href="#'+identifire+'"]').addClass('visible');	
			}
		})
	})
}

//calculator for pop-up
function CalcSum(){
		var summ = 0;
	$('.prices label').on("mouseup", function(){
		var price = parseInt($(this).find('.price').find('span').text());
		var idOfItem = $(this).attr('for');
		
		if($('.left-block input[id="'+idOfItem+'"]').prop('checked')){
			$('.bottomSumm .summ').text((summ -= price)+"р");
			console.log(summ)
		}else{$('.bottomSumm .summ').text((summ += price)+"р");
				console.log(summ);
			}
		})
	
}


$(document).ready(function(){

	fancyBoxParam()

	InitSlider();
	
	dotController();

	windowCheck($(".chekingItem"));

	CalcSum();

	fadeBackground()
});

$(window).load(function(){

});

$(window).resize(function(){

});