'use strict';

(() => {

  let btn = document.getElementsByClassName('num-btn');

  Array.from(btn).forEach(function(e) {
    e.addEventListener('click', function() {
      console.log(this.innerText);
    });
  });

  const operations = () => {

  };

})();