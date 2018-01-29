'use strict';

// (() => {

  let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890';
  let symbols = '!@#$%^&*()-/\\<>:;\'\"+=';


  function containsCapitalLetter(str) {
    if(str === str.toLowerCase()) {
      console.log('lowercase included!');
    } else {
      console.log('no lowercase!');
    }
  }

  function containsNumbers(str) {
    let foreignArray = [];
    for(let i = 0; i<str.length; i++) {
      if(numbers.includes(str[i])) {
        console.log(str[i]);
        foreignArray.push(parseInt(i));
      }
    }
    if(foreignArray.length !== 0) {
      cleanString(str, foreignArray);
    }
  }

  function cleanString(str, array) {
    console.log('cleanString() activated');
    let halfOne = '';
    let halfTwo = '';
    let removedChars = [];
    for(let i = 0; i<str.length; i++) {
      if((i === array[i])) {

      }
    }
  }

  function containsSymbols(str) {

  }

// })();