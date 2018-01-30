'use strict';

// (() => {

  const containsCapitalLetter = (str) => {
    if(str===str.toLowerCase()) {
      console.log('Capitals not included');
    } else {
      console.log('Capitals included');
    }
  };

  const cleanString = (arr) => {
    let nastyArr = [];
    for(let i=0; i<arr.length; i++) {
      if((arr.charCodeAt(i) >= 65 && arr.charCodeAt(i) <= 90) || (arr.charCodeAt(i) >= 97 && arr.charCodeAt(i) <= 122)) {
        console.log(arr.charCodeAt(i));
        nastyArr.push(arr[i]);
      }
    }
    return nastyArr.join('');
  };

  const openConesShop = () => {
    let allCones = Math.floor(Math.random() * 50) + 50;

    do {
      let randomCones = Math.floor(Math.random() * 5 + 1);
      if(allCones < randomCones) {
        allCones -= allCones;
        console.log("Cones left: " + allCones);
      } else {
        allCones -= randomCones;
        console.log("Cones left: " + allCones);
      }
    } while (allCones > 0);
  };

  const multiplesTable = (num, max) => {
    for (let i=0; i<=max; i++) {
      let result = num * i;
      console.log(num + ' * ' + i + ' = ' + result);
    }
  };

/*
* TODO write a function that takes in a string and checks for characters in the string that could be used for any one word in an array of words. If so, print out those words that were spelled with the characters from the string. */

  const betweenTheLines = (str) => {
    let badWords = ['pony', 'unicorn', 'bleh', 'poop', 'smeg'];
    for(let i=0; i<badWords.length; i++) {
      for(let j=0; j<str.length; j++) {
        //check each char in str against this index of badWords. if the char is in this iteration, add it to a new array. if the new array
      }
    }
  };

  const addDigit = () => {
    for(let i=0; i<10; i++) {
      let result = '';
      for(let j=0; j<i; j++) {
        result += i;
      }
      console.log(result);
    }
  };

  const fizzBuzz = () => {
    for(let i=0; i<100; i++) {
      if(i % 5===0 && i % 3===0) {
        console.log('FizzBuzz');
      } else if(i % 5===0) {
        console.log('Fizz');
      } else if(i % 3===0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  };



// })();