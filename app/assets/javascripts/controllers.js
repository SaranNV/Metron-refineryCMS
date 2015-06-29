'use strict';

var nav_show = true;
var rowHeight = $('#head').height();

$( document ).ready(function() {
    togg();
    $("#id2").hide();
    $("#id4").hide();
    $("#id6").hide();

    $("#button_1").mouseover(function(){
        $(this).addClass('mouse_on')
    }).mouseout(function(){
        $(this).removeClass('mouse_on')
    });

    $("#button_2").mouseover(function(){
        $(this).addClass('mouse_on_about')
    }).mouseout(function(){
        $(this).removeClass('mouse_on_about')
    });


    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

function togg(){
    if($(window).width() < 768)
    {
        $('#menu .nav').hide();
        nav_show = false;
        $('#header_row').hide();
        $('#header_row_1').show();
    }
    else{
        $('#header_row').show();
        $('#header_row_1').hide();
        $('#menu .nav').show();
    }
}

$('.toggle').click(function(){
    if(nav_show == true)
    {
        $('#menu .nav').hide();
        nav_show = false;
    }
    else{
        $('#menu .nav').css({'display': 'block','padding-left':'0'});
        nav_show = true;
    }
});


$('.carousel').carousel({
    interval: 2000
});

function mouseOver(e){
    if(e.id == 'SuperMedWeb'){
        $("#id1").show();
        $("#id2").show();
    }else if(e.id == 'ScreenWeek'){
        $("#id3").show();
        $("#id4").show();
    }else if(e.id == 'FanPrint'){
        $("#id5").show();
        $("#id6").show();
    }
}

function mouseOut(e){
    if(e.id == 'SuperMedWeb'){
        $("#id1").show();
        $("#id2").hide();
    }else if(e.id == 'ScreenWeek'){
        $("#id3").show();
        $("#id4").hide();
    }else if(e.id == 'FanPrint'){
        $("#id5").show();
        $("#id6").hide();
    }
}

$(window).resize(function() {
    togg();
    rowHeight = $('#head').height();
    if($(window).width() > 768){
        $('#menu .nav').css({'display': '-webkit-inline-box'});
        fixDiv();
    }else{
        $('#menu .nav').css({'top': '30px','position':'absolute','background': 'rgba(255,255,255,0.75)'});
        $('#menu ul li a').css({'color':'#000'});
    }
});

function fixDiv() {
    var $cache = $('.nav');
    if ($(window).scrollTop() > rowHeight){
        $cache.css({'position': 'fixed','top':'0','z-index': '100000','background':'#000','padding':'3px'});
        $('#menu ul li a').css({'color':'#fff'})
    }
    else{
        $('#menu ul li a').css({'color':'#000'});
        $cache.css({'position': 'absolute','top':rowHeight + 'px','background': 'rgba(255,255,255,0.75)','border': 'none'});
    }
}

$(window).scroll(function(){
    var window_top = $(window).scrollTop();

    if(window_top != 0){
        $('#backToTop').addClass('back_to_top').fadeIn();
    }else{
        $('#backToTop').removeClass('back_to_top').fadeOut();
    }
    if($(window).width() > 768){
        fixDiv();
    }else{
        console.log('#### sm screen ####');
    }
});

