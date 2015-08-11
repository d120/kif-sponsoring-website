(function (window, document, $, undefined) {

  "use strict";

  $(function(){
    $('.fade-left').css({
      left: '-200px',
      opacity: 0
    });
    $('.fade-right').css({
      left: '+200px',
      opacity: 0
    })

    $('.fade-left, .fade-right').each(function(i, elem){
      new Waypoint.Inview({
        element: elem,
        enter: function(direction) {
          $(elem).animate({
            left: 0,
            opacity: 1
          }, 500);
        }
      });
    });
  });

})( window, document, jQuery );
