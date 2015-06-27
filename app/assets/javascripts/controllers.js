'use strict';

/* Controllers */
//
//var spreeMarketController = angular.module('spreeMarketController', []);
//
//spreeMarket.controller('MainCtrl',['$scope','$log',function($scope,$log){


var nav_show = true;

$( document ).ready(function() {
    $('#back_to_top').removeClass('back_to_top');
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



$(window).scroll(function(){
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

//contact_us ajax javascript functions
var $form = $(".contact_form");
$( "#contact_us_name" ).keypress(function() {
    $(".name_required").css("display","none");
});
$( "#contact_us_email" ).keypress(function() {
    $(".email_required").css("display","none");
});
$( "#contact_us_message" ).keypress(function() {
    $(".message_required").css("display","none");
});
$('.close-modal').on('click',function(){
    $(".notifications").css("display","none");
    $("#overlay").css("display","none");
});
$('#detail_submit').on('click',function(){
    var name = $("#contact_us_name").val();
    var email = $("#contact_us_email").val();
    var message = $("#contact_us_message").val();
    if(name === "" && email=== "" && message === "" ){
        $(".name_required").css("display","block");
        $(".email_required").css("display","block");
        $(".message_required").css("display","block");
    }else if(name === "" && email=== ""){
        $(".name_required").css("display","block");
        $(".email_required").css("display","block");
    }else if(email === "" && message === "" ){
        $(".email_required").css("display","block");
        $(".message_required").css("display","block");
    }else if(message === "" && name === ""  ){
        $(".name_required").css("display","block");
        $(".message_required").css("display","block");
    }else if(name === ""){
        $(".name_required").css("display","block");
    }else if(email === ""){
        $(".email_required").css("display","block");
    }else if(message === "") {
        $(".message_required").css("display", "block");
    }else{
        $("#overlay").show();
        $("#theImg").show();
        $.ajax({
            type: "POST",
            url: $form.attr('action'),
            data:{
                client_name: name,
                client_email: email,
                client_message: message
            },
            success: function(data) {
                $("#theImg").hide();
                $(".notifications").show();
                $("#overlay").show();
                document.getElementById('contact_us_name').value = "";
                document.getElementById('contact_us_email').value = "";
                document.getElementById('contact_us_message').value = "";
            },
            error: function(data){
                alert(JSON.parse(xhr.responseText).Message);
            }
        });
    }
});
//contact-us validate_email
function validateEmail(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var validation = $(".invalid-email");
    var txt_email_value = $("#contact_us_email").val();

    if (reg.test(txt_email_value) == false)
    {
        validation.css("display","block");
        return false;
    }
    validation.css("display","none");
    return true;

}
$(".close-modal").on('click',function(){
    $(".notifications").css("display","none");
    $("#overlay").css("display","none");
});

//geo map javascript

$( document ).ready(function() {
    function initialize() {
        var latitude = $('#location-canvas').attr('data-parameter1');
        var longitude = $('#location-canvas').attr('data-parameter2');
        var coords = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            zoom: 9,
            center: coords,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        var map = new google.maps.Map(document.getElementById('location-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            draggable: false,
            position: coords
        });
    }
    google.maps.event.addDomListener(window, 'resize', initialize);
    google.maps.event.addDomListener(window, 'load', initialize);
    window.onload = initialize();
    twttr.widgets.load();
});



//}]);
