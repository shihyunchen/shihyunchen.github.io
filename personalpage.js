
$(document).ready(function(){
    $("#homebar").click(function() {
            $('html, body').animate({
            scrollTop: $("#home").offset().top
            },2000,'easeInOutExpo');
    });
    $("#authorbar").click(function() {
            $('html, body').animate({
            scrollTop: $("#author").offset().top
            },2000,'easeInOutExpo');
    });
    $("#introbar").click(function() {
            $('html, body').animate({
            scrollTop: $("#intro").offset().top
            },2000,'easeInOutExpo');
    });
    $("#expbar").click(function() {
            $('html, body').animate({
            scrollTop: $("#experience").offset().top
            },2000,'easeInOutExpo');
    });
    $("#storybar").click(function() {
            $('html, body').animate({
            scrollTop: $("#story").offset().top
            },2000,'easeInOutExpo');
    });
    $("#friendsbar").click(function() {
            $('html, body').animate({
            scrollTop: $("#friends").offset().top
            },2000,'easeInOutExpo');
    });
     $("#famousbar").click(function() {
            $('html, body').animate({
            scrollTop: $("#famous").offset().top
            },2000,'easeInOutExpo');
    });
    
});