(function (window, document, $, undefined) {

  "use strict";

  $(function(){
    $('.fade-left').css({
      left: '-100px',
      opacity: 0
    });
    $('.fade-right').css({
      left: '+100px',
      opacity: 0
    });

    $('.waypoint-anchor').each(function(i, elem){
      $(elem).waypoint(function(){
        $(elem).find('.fade-left, .fade-right').animate({
          left: 0,
          opacity: 1
        }, 300);
      }, {
        offset: '60%'
      });
    });
  });

  $('a').click(function(){
    console.log('a[name=' + $.attr(this, 'href') + ']');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 300);
    return false;
  });

})( window, document, jQuery );
