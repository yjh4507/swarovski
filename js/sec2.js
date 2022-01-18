$(document).ready(function () {
    // top
    var index = 0;
    window.onload = function () {
        slideShow();
    }
    function slideShow() {
        var i;
        var x = document.getElementsByClassName("slide1");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        index++;
        if (index > x.length) {
            index = 1;
        }
        x[index - 1].style.display = "block";
        setTimeout(slideShow, 4000);
    }
});

// bottom
$(function(){
    $(".prev").click(function(){
        $(".sec2_slide li:last").prependTo(".sec2_slide");
        $(".sec2_slide").css({marginLeft:-300});

        $(".sec2_slide").stop().animate({marginLeft:0},300);
    });
    $(".next").click(function(){
        $(".sec2_slide").stop().animate({marginLeft:-300},300, function(){
            $(".sec2_slide li:first").appendTo(".sec2_slide");
            $(".sec2_slide").css({marginLeft:0});
        });
    });
});    
