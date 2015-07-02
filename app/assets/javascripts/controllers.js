'use strict';

var nav_show = true;
var rowHeight;
var twttr;

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

    twitter_widget_load();
});
function twitter_widget_load(){
        if (twttr) {
            if (twttr.widgets != undefined) {
                twttr.widgets.load()
            }
        }
}

function togg(){
    if($(window).width() <= 1280)
    {

        $('#menu .nav').hide();
        nav_show = false;
        $('#header_row').hide();
        $('#header_row_1').show();
        $('#header_row_1').removeClass('hidden');
        rowHeight = $('#head').height();
    }
    else{

        $('#header_row').show();
        $('#header_row_1').hide();
        $('#menu .nav').show();
        $('#header_row').removeClass('hidden');
        rowHeight = $('#head').height();
    }
}

$('.toggle').click(function(){
    if(nav_show == true)
    {
        $('#menu .nav').hide();
        nav_show = false;
    }
    else{
        $('#menu .nav').css({'display': 'block','padding-left':'0','top' : '60px'});
        nav_show = true;
    }
});


$('.carousel').carousel({
    interval: 5000
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
    if($(window).width() > 1280){
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
        $cache.css({'position': 'fixed','top':'0','z-index': '100000','background':'#000'});
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
    if($(window).width() > 1280){
        fixDiv();
    }else{
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

