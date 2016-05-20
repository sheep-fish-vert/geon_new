function InitSlider(){
	$('.slider-vraper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true
	});
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

// function scrollForActive(){
//     $(window).scroll(function(event) {

//         var scrolltop = $(window).scrollTop()+$('header').outerHeight();

//         $('.main section').each(function(index, el) {
//             if($(this).offset().top <= scrolltop && $(this).offset().top+$(this).outerHeight()>scrolltop){
//                var sectID = $(this).find('.title').attr('id');
//                $('header nav li a:not([data-href="#'+sectID+'"])').parent('li').removeClass('active');
//                 $('header nav li a[data-href="#'+sectID+'"]').parent('li').addClass('active');
                
//             }
//         });
//     });
// }
function CalcSum(){
		var summ = 0;
	$('.prices label').on("mouseup", function(){
		var price = parseInt($(this).find('.price').find('span').text());
		var idOfItem = $(this).attr('for');
		
		if($('.left-block input[id="'+idOfItem+'"]').prop('checked')){
			$('.bottomSumm .summ').text(summ -= price);
			console.log(summ)
		}else{$('.bottomSumm .summ').text(summ += price);
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
});

$(window).load(function(){

});

$(window).resize(function(){

});