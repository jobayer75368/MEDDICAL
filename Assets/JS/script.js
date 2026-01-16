$(document).ready(function () {
    $(".sideBar_btn").click(function () {
        $(".mobile_sideBar").toggleClass("mobile_sideBar_open");
    });
    $(".sideBar_close").click(function () {
        $(".mobile_sideBar").toggleClass("mobile_sideBar_open");
    });

    $("header")
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
            $("header").css("transform", "translateY(-65%)");
        }
        else {
            $("header").css("transform", "translateY(0)")
        }
    })
});

// const topmost = document.querySelector("header");

// window.addEventListener("scroll", function () {
//     if (window.scrollY > 60) {
//         topmost.style.transform = "translateY(-100%)";
//     } else {
//         topmost.style.transform = "translateY(0)";
//     }
// });
