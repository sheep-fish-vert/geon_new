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
function tabsSeven() {
    var tab = $('.seven .tab');
    var info = $('.seven .info');
    tab.click(function () {
        if(!$(this).hasClass('active')){
            tab.removeClass('active');
            info.removeClass('active');
            var ind = $(this).index();
            $(this).addClass('active');
            info.eq(ind).addClass('active');
        }
    });
}
function arrowsSevenTabs() {
    var prev = $('.seven .prev');
    var next = $('.seven .next');
    var tab = $('.seven .tab');
    var info = $('.seven .info');
    prev.click(function () {
        var current = $('.seven .tab.active').index();
        if(current == 0){
            current = tab.length - 1;
        }else{
            current--;
        }
        reAddClass(current);

    });
    next.click(function () {
        var current = $('.seven .tab.active').index();
        if(current == tab.length - 1){
            current = 0;
        }else{
            current++;
        }
        reAddClass(current);
    });
    function reAddClass(current) {
        tab.removeClass('active');
        info.removeClass('active');
        info.eq(current).addClass('active');
        tab.eq(current).addClass('active');
    }
}
$(document).ready(function(){
    tabsFour();
    tabClick();
    sliderInitSix();
    tabsSeven();
    arrowsSevenTabs();
});

$(window).load(function(){

});

$(window).resize(function(){

});