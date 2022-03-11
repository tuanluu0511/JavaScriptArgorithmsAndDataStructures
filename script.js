'use strict';

//PROBLEM SOLVING PATTERN:
// 1.Frequency counters:
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let index = arr2.indexOf(arr1[i] ** 2);
//     if (index === -1) {
//       return false;
//     }
//     arr2.splice(index, 1);
//   }
//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

console.log(same([1, 2, 3, 1], [4, 1, 9, 1]));
// console.log(same([''], ['']));
/*
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
*/
