'use strict';

(() => {

  let btn = document.getElementsByClassName('btn');

  Array.from(btn).forEach(function(element) {
    element.addEventListener('click', function(e) {
      operations(e);
    });
  });

  const operations = (e) => {
    document.getElementById('display').innerText = e.target.innerText;
  };

})();