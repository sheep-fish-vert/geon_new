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


$(document).ready(function(){
    tabsFour();
    tabClick();
});

$(window).load(function(){

});

$(window).resize(function(){

});