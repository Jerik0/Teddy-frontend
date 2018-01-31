'use strict';

// (() => {


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

  const containsCapitalLetter = (str) => {
    return str===str.toLowerCase();
  };

  const fizzBuzz = () => {
    for(let i=0; i<100; i++) {
      if(i % 5==0 && i % 3==0) {
        console.log('FizzBuzz');
      } else if(i % 5==0) {
        console.log('Buzz');
      } else if(i % 3==0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  };

  const isEven = (num) => {
    return (parseInt(num) % 2==0);
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

  const numGenerator = () => {
    for(let i=0; i<10; i++) {
      let num = Math.floor((Math.random() * 20) + 200);
      isEven(num);
    }
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

/*
* TODO write a function that takes in a string and checks for characters in the string that could be used for any one word in an array of words. If so, print out those words that were spelled with the characters from the string. */

  const reverseInput = (str) => {
    let reversed = '';
    for(let i=str.length; i>-1; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  };

  const staggerString = (str) => {
    let newArray = [];
    for(let i=0; i<str.length; i++) {
      if(isEven(i)) {
        newArray.push(str[i].toUpperCase());
      } else {
        newArray.push(str[i]);
      }
    }
    newArray = newArray.join('');
    return newArray;
  };

// })();