(() => {

  $('.column').on({
    'mouseover': function() {
      $(this).children().css({
        'color': '#ff4632',
      });
      $(this).addClass('hovered');
    },
    'mouseleave': function() {
      $(this).children().css({
        'color': 'white'
      });
      $(this).removeClass('hovered');
    }
  });

})();