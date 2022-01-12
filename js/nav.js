$(document).ready(function(){
  $("#menu h1").click(function(){
    $("html, body").animate({scrollTop:0}, 400);
    nav.removeClass("active");
  });


  var nav = $("#menu ul li");
  var contents = $("#contents > section");
  
  nav.click(function (){
    var target =$(this);
    var index =target.index()+1;
    var section =contents.eq(index);
    var offset=section.offset().top;
  
    $("html, body").animate({scrollTop:offset}, 400);
  });
  
  $(window).scroll(function(){
    var wScroll=$(this).scrollTop();
    for (i=0; i<nav.length; i++){
      if(wScroll >= contents.eq(i+1).offset().top){
        nav.removeClass("active");
        nav.removeClass("active_b");
        nav.eq(i).addClass("active");
      }else if(wScroll >= contents.eq(2).offset().top && wScroll < contents.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active_b");
      }else if (wScroll < contents.eq(1).offset().top){
        nav.removeClass("active");
      }
    };
  });
});
