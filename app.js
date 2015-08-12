(function (window, document, $, undefined) {

  "use strict";

  $(function(){
    $('.fade-left').css({
      left: '-100px',
    });
    $('.fade-right').css({
      left: '+100px',
    });

    $('.fade-left, .fade-right').css({
      opacity: 0
    }).each(function(i, elem){
      new Waypoint.Inview({
        element: elem,
        entered: function(direction) {
          $(elem).animate({
            left: 0,
            opacity: 1
          }, 400);
        }
      });
    });
  });

  $('a').click(function(){
    console.log('a[name=' + $.attr(this, 'href') + ']');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

})( window, document, jQuery );
