'use strict';
///////////////////////
// RECURSION

function indexOf(arr, num) {
  let mid = 0;
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const result = indexOf(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  -2
);
console.log(result);
//   0 1 2 3 4 5
/*
//POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

//FACTORIAL SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

//FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//Min sub array length

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1

// SLIDING WINDOW - maxSubarraySum

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = 0; i < arr.length - num + 1; i++) {
    tempSum = tempSum - arr[i] + arr[num + i];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null

//Coding Exercise 5: Multiple Pointers - averagePair

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false

//Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates

function areThereDuplicates(...arr) {
  let result = {};
  for (let i of arr) {
    result[i] = (result[i] || 0) + 1;
    if (result[i] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

//Coding Exercise 3: Frequency Counter - sameFrequency

function sameFrequency(num1, num2) {
  if ((num1 && num2) === undefined || (num1 && num2).length === 0)
    return 'No number!';
  let firstNum = {};
  let secondNum = {};

  let num1String = num1.toString();
  let num2String = num2.toString();

  for (let val of num1String) {
    firstNum[val] = (firstNum[val] || 0) + 1;
  }

  for (let val of num2String) {
    secondNum[val] = (secondNum[val] || 0) + 1;
  }

  for (let key in firstNum) {
    if (firstNum[key] !== secondNum[key]) {
      return false;
    }
    return true;
  }
}

console.log(sameFrequency(182, 281)); //true

//Divide and Conquer

//SLIDING WINDOW

//Refactor
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // if (tempSum > maxSum) maxSum = tempSum;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) return null;
//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) max = temp;
//   }
//   return max;
// }

//MULTIPLE POINTER PATTERN
//countUnique Value

// function countUniqueValues(arr) {
//   let result = {};
//   for (let i of arr) {
//     result[i] = result[i] || 1;
//   }
//   return Object.keys(result).length;
// }

function countUniqueValues(arr) {
  let i = 0;
  let j = i + 1;
  if (arr === undefined || arr.length === 0) return i;

  // if (arr === []) return 0;
  // console.log(arr.length);
  while (j <= arr.length - 1) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else j++;
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); //[-3,3]

//FREQUENCY COUNTER - VALID ANAGRAM

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('azaz', 'aazz'));
console.log(validAnagram('rat', 'cat'));
console.log(validAnagram('anagrams', 'nagarams'));
function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if ((arr1 === arr2) === '') return true;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}
console.log(validAnagram('', ''));
console.log(validAnagram('azaz', 'aazz'));
console.log(validAnagram('rat', 'cat'));
console.log(validAnagram('anagrams', 'nagarams'));

**************************
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
