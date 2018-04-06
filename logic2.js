"use strict";

let coffees = [
  {id: 1, name: 'Light City', roast: 'light'},
  {id: 2, name: 'Half City', roast: 'light'},
  {id: 3, name: 'Cinnamon', roast: 'light'},
  {id: 4, name: 'City', roast: 'medium'},
  {id: 5, name: 'American', roast: 'medium'},
  {id: 6, name: 'Breakfast', roast: 'medium'},
  {id: 7, name: 'High', roast: 'dark'},
  {id: 8, name: 'Continental', roast: 'dark'},
  {id: 9, name: 'New Orleans', roast: 'dark'},
  {id: 10, name: 'European', roast: 'dark'},
  {id: 11, name: 'Espresso', roast: 'dark'},
  {id: 12, name: 'Viennese', roast: 'dark'},
  {id: 13, name: 'Italian', roast: 'dark'},
  {id: 14, name: 'French', roast: 'dark'},
  ];

displayCoffees(coffees);

function displayCoffees(arr) {
  let coffeesContainer = '<div id="coffee-labels-container">';
  arr.forEach(function(el) {
    coffeesContainer += `<div class="coffee-card">`;
    coffeesContainer += `<h2 class="coffee-name">${el.name}</h2>`;
    coffeesContainer += `<span class="coffee-roast">${el.roast}</span>`;
    coffeesContainer += `</div>`;
  });
  coffeesContainer += '</div>';
  document.getElementById('coffee-container').innerHTML = coffeesContainer;
}

const changeSelectedCoffee = () => {
  let newCoffees = [];
  coffees.forEach((el) => {
    if(el.roast.match(this.options[this.selectedIndex].value)) {
      newCoffees.push(el);
    } else if(this.options[this.selectedIndex].value === 'all') {
      newCoffees.push(el);
    }
  });
  displayCoffees(newCoffees);
};

const searchCoffees = () => {
  let newCoffees = [];
  let filter = document.getElementById('search').value;
  coffees.forEach((el) => {
    if(matchesNameOrDescription(el, filter)) {
      newCoffees.push(el);
    }
  });
  displayCoffees(newCoffees);
};

function matchesNameOrDescription(el, filter) {
  return el.name.toLowerCase().match(filter)
      || el.roast.toLowerCase().match(filter);
}

//============EVENT LISTENERS=============
document.getElementById('search').addEventListener('keyup', searchCoffees);

document.getElementById('coffee-selector').addEventListener('change', changeSelectedCoffee);
