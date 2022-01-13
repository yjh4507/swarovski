$(document).ready(function(){
// top
    var index=0;
    window.onload=function(){
        slideShow();
    }
    function slideShow(){
        var i;
        var x=document.getElementsByClassName("slide1");
        for (i=0; i<x.length; i++){
            x[i].style.display="none";
        }
        index++;
        if (index>x.length){
            index=1;
        }
        x[index-1].style.display="block";
        setTimeout(slideShow,4000);
    }
});

// bottom
if (window.matchMedia("(min-width: 1200px)").matches) { 

    $('.prev').click(function () {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css({marginLeft: -1150});
        $('.slide').stop().animate({ marginLeft: 0 }, 800)
    });
    $('.next').click(function () {
        $('.slide').stop().animate({marginLeft: -1150}, 800, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
        });
    });

} else { 

    var w=window.innerWidth;

    $('.prev').click(function () {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css({marginLeft: -w});
        $('.slide').stop().animate({ marginLeft: 0 }, 800)
    });
    $('.next').click(function () {
        $('.slide').stop().animate({marginLeft: -w}, 800, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
        });
    });

}