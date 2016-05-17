


$(document).ready(function(){

    $('.tabs-block li span').click(function(){
        if(!$(this).hasClass('active')){
            $('.tabs-block li span').removeClass('active').next('p').slideUp(200); 
            $(this).addClass('active');	
            $(this).next('p').slideDown(200);	
        } else {
            $(this).removeClass('active').next('p').slideUp(200);
        }
    });


});

$(window).load(function(){

});

$(window).resize(function(){

});