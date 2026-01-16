$(document).ready(function () {

    $(".sideBar_btn").click(function () {
        $(".mobile_sideBar").toggleClass("mobile_sideBar_open");
    });

    $(".sideBar_close").click(function () {
        $(".mobile_sideBar").toggleClass("mobile_sideBar_open");
    });

    $(window).scroll(function () {
        if ($(window).width() <= 768) {
            if ($(window).scrollTop() > 60) {
                $("header").css("transform", "translateY(-70%)");
            } else {
                $("header").css("transform", "translateY(0)");
            }
        }
    });

});
