//alwaysnew on codepen
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.jumbotron').css('opacity',1-(scrolled*0.00175));
};

//Thank you relst.jquery from the jquery forum
$(document).ready(function(){
   //timeout
  $("li").css("display","none"); //hide
  $("li").each(function (i){
        var me = $(this);
        setTimeout(function(){ $(me).fadeIn(1500); }, (1500 * i));
     });
  });