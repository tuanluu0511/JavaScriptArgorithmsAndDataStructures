'use strict';
// Write a function that receive a string and return character count in string.
//Sample input: 'Your PIN number is 1234'
//Output:
// 1: 1
// 2: 1
// 3: 1
// 4: 1
// b: 1
// e: 1
// i: 2
// m: 1
// n: 2
// o: 1
// p: 1
// r: 2
// s: 1
// u: 2
// y: 1

// function charCount(str) {
//   // 1. Create an object
//   let result = {};
//   // Remove space from string
//   let newStr = str.toLowerCase().split(' ').join('');
//   for (let i = 0; i < str.length; i++) {
//     let char = newStr[i];
//     // 2. Check f the number/char is in the object:
//     if (result[char]) {
//       // if yes count = count + 1;
//       result[char]++;
//     } else {
//       // if not, count = 1;
//       result[char] = 1;
//     }
//   }

//   // 3. Return the object
//   return result;
// }

// const str1 = charCount('Your PIN number is 12341');
// console.log(str1);

function charCount(str) {
  let result = {};

  for (let char of str) {
    char = char.toLowerCase();
    // if (/[a-z0-9]/.test(char))
    // if (result[char]) {
    //   result[char]++;
    // } else {
    //   result[char] = 1;
    // }
    if (isAlphaNumeric(char)) result[char] = ++result[char] || 1;
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
    // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

const str1 = charCount('Your PIN number is 1234 ');
console.log(str1);

// const countChars = (str) => {
//   const chars = {}; // create a counter object
//   //Remove space from string
//   const arr = str.toLowerCase().split(' ').join('').split(''); // make an array from the characters and count
//   arr.forEach((char) => (chars[char] = ++chars[char] || 1));
//   return chars;
// };

// console.log(countChars('Now is the time'));
