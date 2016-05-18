function InitSlider(){
	$('.slider-vraper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true
});
}


$(document).ready(function(){
	InitSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});