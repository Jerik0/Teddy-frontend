(() => {

  $('.column').on({
    'mouseover': function() {
      $(this).children().css({
        'color': '#ff4632',
      });
      $(this).addClass('hovered'); //change font color
    },
    'mouseleave': function() {
      $(this).children().css({
        'color': 'white'
      });
      $(this).removeClass('hovered'); //change font color back
    },
    'click': function() {
      let i = 0;

      while(i < this.classList.length) {
        console.log(i);
        console.log(this.classList[i]);
        if(this.classList[i] === 'flash') {
          $(this).parent().children().removeClass('flash'); //supposed to remove flash class
        }
        $(this).parent().children().addClass('flash'); //adds flash class
        i++;
      }
    }
  });

})();