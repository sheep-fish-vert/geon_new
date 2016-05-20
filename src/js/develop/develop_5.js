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

    var uluru = {lat: 55.751625, lng: 37.620875};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var styles = [
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -90 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    map.setOptions({styles: styles});
    changeSelectToShowMapCenter(map);
    createMarkersArray(map);


}

function createMarkersArray(map) {
    var markerArray = [];
    var list = 0;
    var image = '../images/markerAPI.png';

    $('footer .list').each(function () {
        markerArray[list] = [];
        var row = 0;
        $(this).find('li').each(function () {
            markerArray[list][row] = [];
            var corX = parseFloat($(this).attr('data-corX'));
            var corY = parseFloat($(this).attr('data-corY'));

            var adres = $(this).find('.adres').text();
            var phone = $(this).find('.phone').text();
            markerArray[list][row].push(corX);
            markerArray[list][row].push(corY);
            var marker = new google.maps.Marker({
                position: {lat: corX, lng: corY},
                map: map,
                title: adres,
                icon: image
            });
            markerArray[list][row].push(marker);
            var contentString = '<div class="showcase-wrap"><div class="show-case"><div class="adres">'+adres+'</div><div class="phone">тел. '+phone+'</div></div></div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            markerArray[list][row].push(infowindow);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            $(this).on('click', function() {
                if(!$(this).hasClass('active')) {
                    $('.list li').removeClass('active');
                    $(this).addClass('active');
                    closeInfoAll(markerArray);
                    infowindow.open(map, marker);
                    stylingInfowindowGoogleMapApi();
                }
            });
           row++;

        });
        list++;
    });
    console.log(markerArray);
}
function closeInfoAll(array) {
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
            array[i][j][3].close();
        }
    }
}
function changeSelectToShowUl() {
    $(document).on('change', 'footer .select-wrap select', function () {
        var id = $(this).val();
        $('footer .list').removeClass('active');
        $('footer .list#'+id).addClass('active');
    });
}
function changeSelectToShowMapCenter(map) {
    $(document).on('change', 'footer .select-wrap select', function () {
        var corX = parseFloat( $(this).find(':selected').attr('data-corX'));
        var corY = parseFloat( $(this).find(':selected').attr('data-corY'));

        map.setCenter({lat: corX, lng: corY});

    });
}
function stylingInfowindowGoogleMapApi() {
    var content = $('.showcase-wrap');
    var inner3 = content.parent().parent().css({'background-color': '#78c45a'});
    var inner2 = content.parent().parent().parent().css({'background-color': '#78c45a'});
    var inner1 = content.parent().parent().parent().parent().css({'background-color': '#78c45a'});
   inner2.prev().find('div:nth-child(4)').css({'background-color': '#78c45a'});
   inner2.prev().find('div:nth-child(3)>div>div').css({'background-color': '#78c45a'});
    inner2.next().css({'display':'none'});
}
$(document).ready(function(){
    tabsFour();
    tabClick();
    sliderInitSix();
    tabsSeven();
    arrowsSevenTabs();
    changeSelectToShowUl();



});

$(window).load(function(){
    setTimeout(function() {
        $('footer .select-wrap select').styler();

    }, 500);
});

$(window).resize(function(){

});