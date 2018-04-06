'use strict';

// (function() {

const firstNames = [
  "Madam",
  "Reverend",
  "St.",
  "Dr.",
  "Mr.",
  "Mrs.",
  "Bethany",
  "Tarzan",
  "Bubba",
  "Jonathan",
  "Smarmy",
  "Barnacle",
  "Billy-Throb",
  "Smeggin",
  "GEORGE",
  "Chesty",
  "Sizzle",
  "Monster",
  "Squeaker",
  "De-wey",
  "Angel",
  "Jorge",
  "Margaret",
  "Desiree",
  "Allie",
  "Tristan",
  "Richard",
  "Chastity",
  "Megan",
  "Dicksmasher",
  "Dildo",
  "Danny",
  "Bob",
  "Kelsey",
  "Richard",
  "Dick",
  "Blumpy"
];

const middleNames = [
  "Double-decker-dick",
  "Damn-Daniel",
  "Dildo",
  "Christ-puncher",
  "Motion-of-the-ocean",
  "Moe-Lester",
  "Methany",
  "Bubba",
  "CHICKEN F*CKER",
  "pleb",
  "daddy-dick",
  "closet-clinger",
  "giganta-dork",
  "music-manitee",
  "captain-spork",
  "gotta-catch-em-all",
  "haha-holocaust",
  "Thigh-Guy",
  "dancing-queen",
  "squirt",
  "de-wey",
  "knuckles",
  "BWOOOOOOOOOOOOHHHH",
  "The-Entirety-Of-The-Dictionary",
  "TOTALLY-A-HUMAN",
  "Richard",
  "Long-Dong-Silver",
  "Spoopy",
  "Finger-nuggets",
  "prolapsed-butthole",
  "His-Majesty-Prolapse",
  "Tastes-like-grandma",
  "Uncle-grandpa",
  "beaner-weiner",
  "hips-dont-lie",
  "D. S. L.",
  "Fury-Masturbator",
  "Granny-Gum-Jobs",
  "Blumpkin-Pumpkin"
];

const lastNames = [
  "Blumpkin",
  "Milfington",
  "Cobbledick",
  "Pornsak",
  "McDickky",
  "Shufflebottom",
  "Longbottom",
  "Shytles",
  "Negar",
  "Barnacle",
  "Pirouette",
  "Cheeks",
  "Tits",
  "Bobberson",
  "McGee",
  "Magoo",
  "McBoatface",
  "Richards",
  "Long",
  "Smegpot",
  "Ballitch",
  "Stroker",
  "Dingleberry",
  "Dicksmasher"
];

  const addDigit = () => {
    for(let i=0; i<10; i++) {
      let result = '';
      for(let j=0; j<i; j++) {
        result += i;
      }
      console.log(result);
    }
  };

  const betweenTheLines = (str) => {
    let badWords = ['pony', 'unicorn', 'bleh', 'poop', 'smeg'];
    for(let i=0; i<badWords.length; i++) {
      for(let j=0; j<str.length; j++) {
        //check each char in str against this index of badWords. if the char is in this iteration, add it to a new array. if the new array
      }
    }
  };

  const capitalize = (str) => {
    let firstChar = str.substring(0,1).toUpperCase();
    return firstChar + str.substring(1);
  };

  //takes in string of any characters, returns only letters.
  const cleanString = (arr) => {
    let nastyArr = '';
    for(let i=0; i<arr.length; i++) {
      if((arr.charCodeAt(i) >= 65 && arr.charCodeAt(i) <= 90) || (arr.charCodeAt(i) >= 97 && arr.charCodeAt(i) <= 122)) {
        nastyArr = nastyArr.concat(arr[i]);
      }
    }
    return nastyArr;
  };

  const containsCapitalLetter = (str) => {
    return str===str.toLowerCase();
  };

  const fizzBuzz = () => {
    for(let i=0; i<100; i++) {
      if(i%5 === 0 && i%3 === 0) {
        console.log('FizzBuzz');
      } else if(i%5 === 0) {
        console.log('Buzz');
      } else if(i%3 === 0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  };

  const isEven = (num) => {
    return (parseInt(num) % 2==0);
  };

  const isNumber = (str) => {
    return !isNaN(parseInt(str));
  };

  const isPalindrome = (str) => {
    let half = '';
    let half2 = [];
    if(isEven(str.length)) {
      half = str.substring(0,(str.length/2));
      for(let i=str.length; i>(str.length/2) -1; i--) {
        half2.push(str[i]);
      }
      half2 = half2.join('');
    } else {
      half = str.substring(0,(str.length/2));
      for(let i=str.length; i>(str.length/2); i--) {
        half2.push(str[i]);
      }
      half2 = half2.join('');
    }
    return (half === half2);
  };

  const multiplesTable = (num, max) => {
    for (let i=0; i<=max; i++) {
      let result = num * i;
      console.log(num + ' * ' + i + ' = ' + result);
    }
  };

  const openConesShop = () => {
    let allCones = randomGen(50,100);

    do {
      let randomCones = randomGen(1,5);
      if(allCones < randomCones) {
        allCones -= allCones;
        console.log("Cones left: " + allCones);
      } else {
        allCones -= randomCones;
        console.log("Cones left: " + allCones);
      }
    } while (allCones > 0);
  };

const randomGen = (startAt, stopAt) => {
  return Math.floor((Math.random() * stopAt) + startAt);
};

  const reverseInput = (str) => {
    let reversed = '';
    if(isNumber(str)) {
      str = str.toString();
    }
    for(let i=str.length; i>-1; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  };

  const staggerString = (str) => {
    let newArray = '';
    for(let i=0; i<str.length; i++) {
      (isEven(i) ? newArray = newArray.concat(str[i].toUpperCase()) : newArray = newArray.concat(str[i]));
    }
    return newArray;
  };

  const stringGenerator = (chars) => {
    let str = '';
    let randChar;
    for(let i=0; i<chars; i++) {
      let flag = Math.round(Math.random());
      (flag ? randChar = randomGen(65,26) : randChar = randomGen(97,26));
      str = str.concat(String.fromCharCode(randChar));
    }
    return str;
  };

let books = [
    {
      title: 'Terror: A Haiku Story',
      page_length: 342,
      author: {
        first_name: 'Terry',
        last_name: 'McRibbins'
      }
    },
    {
      title: 'Black and White',
      page_length: 1200,
      author: {
        first_name: 'Babby',
        last_name: 'Bobbles'
      }
    },
    {
      title: 'Barneys Folly',
      page_length: 5,
      author: {
        first_name: 'Barney',
        last_name: 'Dontworryaboutit'
      }
    },
    {
      title: 'Wise Guys',
      page_length: 300,
      author: {
        first_name: 'Robert',
        last_name: 'DeNiro'
      }
    },
    {
      title: 'De Way',
      page_length: 500,
      author: {
        first_name: 'Ugandan',
        last_name: 'Knuckles'
      }
    }
  ];

  const bookIterate = () => {
    books.forEach(function(e) {
      console.log(e.title + " " + e.author.first_name, e.author.last_name);
    });
  };

  const directorNameGen = (arr) => {
    let i = Math.floor(Math.random() * arr.length);
    return (arr[i]);
  };

  const directorNameFinish = () => {
    let flag = Math.round(Math.random());
    let firstName = directorNameGen(firstNames);
    let nickName = directorNameGen(middleNames);
    let lastName = directorNameGen(lastNames);
    let fullName = '';
    (flag ? fullName = (firstName + " \'" + nickName + "\' " + lastName) : fullName =  ((firstName + " " + lastName)));
    return fullName;
  };

  const makeDirectorList = (num) => {
    for(let i=0; i<num; i++) {
      document.getElementById('director-name').innerText = directorNameFinish();
    }
  };

  document.getElementById('generate-btn').addEventListener('click', function() {
    makeDirectorList(1)
  });

  let listItems = document.getElementsByTagName('li');

  let empty = document.getElementById('empty-list');

  function addItem(prompt) {
    empty.innerHTML += ('<li>' + prompt + '</li>');
  }

  let changeBtn = document.getElementById('color-list');
  changeBtn.addEventListener('click', function() {
    for(let i=0; i<listItems.length; i+=2) {
      listItems[i].style.color = '#8ffbf3';
      if(listItems[i].getAttribute('data-dbid') == "1") {
        listItems[i].style.color = "blue";
      }
    }
  });

  let addBtn = document.getElementById('add-item');
  addBtn.addEventListener('click', function() {
    addItem(prompt('add another item!'));
  });

  let interval = 1000;

  function changeList() {
    listItems.forEach((e,i) => {

    });
    this.style.color = 'blue';
  }

  // //TODO=========================CLICK AND DRAG TESTING=========================
  // const getPos = () => { //get cursor location in window
  //   document.getElementById('container').addEventListener('mousemove', );
  // };

  const attachElement = element => {

  };

  let noteLeft;
  let noteTop;

  document.getElementById('sticky-note').addEventListener('drag', (event) => {
    console.log((event.clientX + document.body.scrollLeft) + ', ' + (event.clientY + document.body.scrollTop));
    noteLeft = document.getElementById('sticky-note').style.left = (event.clientX + document.body.scrollLeft) + 'px';
    noteTop = document.getElementById('sticky-note').style.top = (event.clientY + document.body.scrollTop) + 'px';
  });

  document.getElementById('sticky-note').addEventListener('drop', () => {
    document.getElementById('sticky-note').style.left = noteLeft;
    document.getElementById('sticky-note').style.top = noteTop;
  });

  //TODO=========================ANIMATION TESTING=========================


// })();