//alwaysnew on codepen
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('#bg').css('opacity',1-(scrolled*0.00175));
};

//Thank you relst.jquery from the jquery forum
$(document).ready(function(){
   //timeout
  $("#intro li").css("display","none"); //hide
  $("#intro li").each(function (i){
        var me = $(this);
        setTimeout(function(){ $(me).fadeIn(1000); }, (1000 * i));
     });
  });

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

 $(document).resize(function () {
     var screen = $(window);  

     if (screen.width < 768) {
         $('#self').addClass('img-responsive');
     } else {
         $('#self').removeClass('img-responsive');
     }
   });