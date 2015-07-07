'use strict';

var nav_show = true;
var current_path;
var split_path;
var extracted_path;
var posted_path;
var blog_path;
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
    get_message();

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
        $('#menu .nav').css({'display': 'block','padding-left':'0','margin-top' : '10px'});
        //$('#menu .nav').show(1000).css({'display': 'block','padding-left':'0','top' : '60px'});
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
        $('#menu .nav').css({'padding-top': '0px','display': '-webkit-inline-box','padding-left':'50px'});
        fixDiv();
    }else{
        $('#menu .nav').css({'padding-top': '50px','top': '0px','padding-left':'0','background': 'rgba(255,255,255,0.75)'});
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
        $cache.css({'position': 'absolute','top':rowHeight + 'px','background': 'rgba(255,255,255,0.75)','border': 'none', 'margin-top': '0'});
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

            }
        });
    }
});
//contact-us validate_email
function validateEmail(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var validation = $(".invalid-email");
    var comment_validation = $(".email_required");
    var comment_email_check = $("#comment_email").val();
    var contact_txt_email_value = $("#contact_us_email").val();
    if(contact_txt_email_value){
        if (reg.test(contact_txt_email_value) == false)
        {

            validation.css("display","block");
            return false;
        }
        validation.css("display","none");
        return true;
    }else{
        if (reg.test(comment_email_check) == false)
        {
            comment_validation.css("display","");
            comment_validation.text("This value Should be Valid Email");
            return false;
        }else{
            comment_validation.css("display","none");
            return true;
        }
    }

}
$(".close-modal").on('click',function(){
    $(".notifications").css("display","none");
    $("#overlay").css("display","none");
});

//geo map javascript

$(document).ready(function() {
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

//commnents javascript function

$("#comment_submit").on("click",function(){
    current_path = window.location.href;
    split_path = current_path.split("blog");
    extracted_path = split_path[0];
    posted_path = extracted_path+"blog/comment_submit";
    var comment_author_name = $("#comment_author").val();
    var author_email = $("#comment_email").val();
    var comment_message= $("#comment_message").val();
    var blog_url = window.location.href;
    if(comment_author_name === "" && author_email === "" && comment_message === "" ){
        $(".name_required").css("display","block");
        $(".email_required").css("display","block");
        $(".message_required").css("display","block");
    }else if(comment_author_name === "" && author_email === ""){
        $(".name_required").css("display","block");
        $(".email_required").css("display","block");
    }else if(author_email === "" && comment_message === "" ){
        $(".email_required").css("display","block");
        $(".message_required").css("display","block");
    }else if(comment_message === "" && comment_author_name === ""  ){
        $(".name_required").css("display","block");
        $(".message_required").css("display","block");
    }else if(comment_author_name === ""){
        $(".name_required").css("display","block");
    }else if(author_email === ""){
        $(".email_required").css("display","block");
    }else if(comment_message === "") {
        $(".message_required").css("display", "block");
    }else {
        $.ajax({
            url: posted_path,
            type: "POST",
            data: {
                author_name: comment_author_name,
                author_email: author_email,
                comment_message: comment_message,
                blog_url: blog_url
            },
            success: function (data) {
                get_message();
                $("#comment_author").val("");
                $("#comment_email").val("");
                $("#comment_message").val("");
            }

        });

    }
    return false;
});


function get_message(){
    var blogs = window.location.href;
    $.ajax({
        url : "/blog/get_blog_comments",
        type : 'POST',
        data:{
            blogs : blogs
        },
        success : function(data){
            if(data.comments_count > 0){
                $(".avatar").css("display","");
                $(".nocomment").css("display","none");
                $(".avatar").attr("id",data.id);
                $(".post-author").text(data.name + " , ");
                $(".post-author").append('<span class="post-date"> </span>');
                $(".post-date").text(data.created_at+" ago");
                $(".btn_delete").attr("id",data.id);
                $(".blog-comment").text(data.comments);
                $(".comment").hide().fadeIn('fast');
                console.log(data);
                if(data.delete_access === true){
                    $(".btn_delete").css("display","");
                }else{
                    $(".btn_delete").css("display","none");
                }
            }
            else{
                $(".avatar").css("display","none");
                $(".leave-comment").prepend('<span class="nocomment">"There are no Comments for this blog"</span>');
                $(".btn_delete").css("display","none");
                $(".post-author").text("");
                $(".post-date").text("");
                $(".blog-comment").text("");

            }
        }
    });
}

//delete_msg function
$(".btn_delete").on("click",function() {
    var delete_id = this.id;
    var checkstr =  confirm('are you sure you want to delete this?');
    if(checkstr == true) {
        $.ajax({
            url: "/blog/delete_comments",
            type: 'POST',
            data: {
                comment_id: delete_id
            },
            success: function (data) {
                alert("Comment was Successfully removed!");
                get_message();
                $('.comments').hide().fadeIn('fast');
            },
            error: function (data) {

            }
        });
    }else{
        return false;
    }

});
