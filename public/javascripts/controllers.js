'use strict';

/* Controllers */
//
//var spreeMarketController = angular.module('spreeMarketController', []);
//
//spreeMarket.controller('MainCtrl',['$scope','$log',function($scope,$log){


var nav_show = true;
console.log("controller");
$( document ).ready(function() {
    console.log("ready");
    $("#id2").hide();
    $("#id4").hide();
    $("#id6").hide();
    $(".links").mouseover(function(){
        $(this).css({'border-bottom': '2px solid'})
    }).mouseout(function(){
        $(this).css({'border-bottom': 'none'})
    });

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

    $('.navbar-toggle').click(function(){
        if(nav_show == true)
        {

            $('#bs-example-navbar-collapse-1').show(1000);
            nav_show = false;
        }
        else{
            $('#bs-example-navbar-collapse-1').hide(1000);
            nav_show = true;
        }
    });

    $('.back-to-top').click(function(){
        console.log("click");
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

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


    function fixDiv() {
       console.log("#############");
        var $cache = $('ul .nav');
        if ($(window).scrollTop() > 100){
            $cache.addClass('.navbar-fixed-top');
        }
        else{
            $cache.removeClass('.navbar-fixed-top');
        }
    }




$(window).scroll(function(){
    console.log("#############");
    fixDiv();
    var window_top = $(window).scrollTop();
    if(window_top != 0){
        $('#nav').css({'background-color': 'black','border-color':'black'})
        $('#backToTop').addClass('back_to_top').fadeIn();
    }else{
        $('#nav').scrollTop(function(){
            $('#backToTop').removeClass('back_to_top').fadeOut();
            $(this).css({'background-color': 'transparent','border-color':'transparent'})
        })

    }
});

//}]);
