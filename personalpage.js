$(document).ready(function() {
    $("#homebar").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 500, 'swing');
    });
    $("#authorbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#author").offset().top
        }, 500, 'swing');
    });
    $("#introbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#introduction").offset().top
        }, 500, 'swing');
    });
    $("#expbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 500, 'swing');
    });
    $("#storybar").click(function() {
        $('html, body').animate({
            scrollTop: $("#story").offset().top
        }, 500, 'swing');
    });
    $("#friendsbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#friends").offset().top
        }, 500, 'swing');
    });
    $("#famousbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#famous").offset().top
        }, 500, 'swing');
    });

});
