function tabsFour() {
    var tab = $('.four .tab');

    var info = $('.four .info');
    tab.each(function () {
       if($(this).hasClass('active')){
           var ind = $(this).index();
           info.eq(ind).stop().slideDown();
       }
    });

}
function tabClick() {
    var tab = $('.four .tab');
    var info = $('.four .info');
    tab.click(function () {
       tab.removeClass('active');
        $(this).addClass('active');
        info.stop().slideUp();
        tabsFour();
    });
}
function sliderInitSix(){
$('.slick-slider-six').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:true
});
}

$(document).ready(function(){
    tabsFour();
    tabClick();
    sliderInitSix();
});

$(window).load(function(){

});

$(window).resize(function(){

});