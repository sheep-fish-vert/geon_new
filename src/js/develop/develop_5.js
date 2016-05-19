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


function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

$(document).ready(function(){
    tabsFour();
    tabClick();
    sliderInitSix();
    tabsSeven();
    arrowsSevenTabs();

});

$(window).load(function(){
    setTimeout(function() {
        $('footer .select select').styler();
    }, 500);
});

$(window).resize(function(){

});