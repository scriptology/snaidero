/**
 * Created with WebStorm.
 * User: ASolovyev@dir.condenast.ru
 * Date: 10/11/13
 * Time: 10:29 PM
 * To change this template use File | Settings | File Templates.
 */
$(function () {

    var titleModel = function (curentSlider) {

        var model_name = $('.fulltitle .model_name');
        var model_more = $('.fulltitle .more');

        if(curentSlider == 1) {
            // Venus
            model_name.text('Venus');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/venus/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/venus/');
        }
        if(curentSlider == 2) {
            // Skyline
            model_name.text('Skyline');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/skyline/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/skyline/');
        }
        if(curentSlider == 3) {
            // Lux
            model_name.text('Lux');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/lux/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/lux/');
        }
        if(curentSlider == 4) {
            // Certosa
            model_name.text('Certosa');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/certosa/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/certosa/');
        }
        if(curentSlider == 5) {
            // Board
            model_name.text('Board');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/board/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/board/');
        }
        if(curentSlider == 6) {
            // Gioconda
            model_name.text('Gioconda');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/gioconda/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/gioconda/');
        }
        if(curentSlider == 7) {
            // Time
            model_name.text('Time');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/time/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/time/');
        }
        if(curentSlider == 8) {
            // Orange
            model_name.text('Orange');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/orange/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/orange/');
        }
        if(curentSlider == 9) {
            // Ola 20
            model_name.text('Ola 20');
            model_name.attr('href', 'http://www.snaidero-center.ru/catalogue/ola20/');
            model_more.attr('href', 'http://www.snaidero-center.ru/catalogue/ola20/');
        }

    };



    $('.btn').on('click', function() {
        $('.popap').fadeIn(300);
        var curentSlider = $(this).attr('rel');
        titleModel(curentSlider);
        //console.log($(this).attr('rel'));

        $('.swipe').fadeOut(0);
        $('#mySwipe' + curentSlider).fadeIn(300)
        //$('#mySwipe' + curentSlider).addClass('active');

        var elem = document.getElementById('mySwipe' + curentSlider);
        window.mySwipe = Swipe(elem, {
            // startSlide: 4,
            // auto: 3000,
            continuous: true,
            // disableScroll: true,
            // stopPropagation: true,
            callback: function(pos) {
                var i = bullets.length;
                while (i--) {
                    bullets[i].className = ' ';
                }
                bullets[pos].className = 'on';

            }
            // transitionEnd: function(index, element) {}
        });
        var bullets = document.getElementById('position').getElementsByTagName('li');
        $('#position li').removeClass('on');
        $('#position li').eq(0).addClass('on');

        var offsetLeft = $('.popap .popap_buttons a.pop_btn'+ curentSlider).offset().left;
        $('.popap .popap_buttons .corner').css({'-webkit-transform': 'translate3d('+ (offsetLeft+20) +'px, 0px, 0px)'});

        event.stopPropagation();
        return false;
    });

    $('.popap .popap_buttons a').on('click', function() {

        var offsetLeft = $(this).offset().left;
        //console.log(offsetLeft);

        var curentSlider = $(this).attr('rel');
        titleModel(curentSlider);

        $('.popap .popap_buttons .corner').css({'-webkit-transform': 'translate3d('+ (offsetLeft+20) +'px, 0px, 0px)'});


        $('.swipe').fadeOut(0);
        $('#mySwipe' + curentSlider).fadeIn(300);
        //$('#mySwipe' + curentSlider).addClass('active');

        var elem = document.getElementById('mySwipe' + curentSlider);
        window.mySwipe = Swipe(elem, {
            // startSlide: 4,
            // auto: 3000,
            continuous: true,
            // disableScroll: true,
            // stopPropagation: true,
            callback: function(pos) {
                var i = bullets.length;
                while (i--) {
                    bullets[i].className = ' ';
                }
                bullets[pos].className = 'on';

            }
            // transitionEnd: function(index, element) {}
        });
        var bullets = document.getElementById('position').getElementsByTagName('li');
        $('#position li').removeClass('on');
        $('#position li').eq(0).addClass('on');
        event.stopPropagation();
        return false;
    });


    // Перед пушем залить поменять на  touchstart
    $('.swipe').on('click', function() {
        event.stopPropagation();
    });

    $('.control button').on('click', function() {
        event.stopPropagation();
    }); 

    $('body').on('click', function() {
        $('.popap').fadeOut(300);
    });
    $('.fulltitle a').on('click', function() {
        event.stopPropagation(); 
    })
});


