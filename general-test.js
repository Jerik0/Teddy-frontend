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

  function containsSymbols(str) {

  }

  function cleanString(arr) {
    let nastyArr = [];
    for(let i = 0; i < arr.length; i++) {
      if((arr.charCodeAt(i) >= 65 && arr.charCodeAt(i) <= 90) || (arr.charCodeAt(i) >= 97 && arr.charCodeAt(i) <= 122)) {
        console.log(arr.charCodeAt(i));
        nastyArr.push(arr[i]);
      }
    }
    return nastyArr.join('');
  }

// })();