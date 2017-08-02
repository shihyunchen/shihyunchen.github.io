$(document).ready(function() {
    $("#homebar").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 500, 'easeInOutExpo');
    });
    $("#authorbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#author").offset().top
        }, 500, 'easeInOutExpo');
    });
    $("#introbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#introduction").offset().top
        }, 500, 'easeInOutExpo');
    });
    $("#expbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 500, 'easeInOutExpo');
    });
    $("#storybar").click(function() {
        $('html, body').animate({
            scrollTop: $("#story").offset().top
        }, 500, 'swing');
    });
    $("#friendsbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#friends").offset().top
        }, 500, 'easeInOutExpo');
    });
    $("#famousbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#famous").offset().top
        }, 500, 'easeInOutExpo');
    });

});
