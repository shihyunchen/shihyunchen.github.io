$(document).ready(function() {
    $("#homebar").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1300, 'easeInOutExpo');
    });
    $("#authorbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#author").offset().top
        }, 1300, 'easeInOutExpo');
    });
    $("#introbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#introduction").offset().top
        }, 1300, 'easeInOutExpo');
    });
    $("#expbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 1300, 'easeInOutExpo');
    });
    $("#storybar").click(function() {
        $('html, body').animate({
            scrollTop: $("#story").offset().top
        }, 1300, 'easeInOutExpo');
    });
    $("#friendsbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#friends").offset().top
        }, 1300, 'easeInOutExpo');
    });
    $("#famousbar").click(function() {
        $('html, body').animate({
            scrollTop: $("#famous").offset().top
        }, 1300, 'easeInOutExpo');
    });

});
