$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 650) {
            $(".nav").css("background", "#000");
            $(".nav").css("transition", "all 0.5s ease");
        }
        else {
            $(".nav").css("background", "transparent");
        }
    });
});