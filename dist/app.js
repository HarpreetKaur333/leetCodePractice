// src/app.js
console.log('Hello from Node.js and Chrome!');
// import { findDuplicates } from './findDuplicate.js';
// import { dutchNationalFlag } from './dutchNationalFlag.js';
// import { bubbleSort } from './arraySorting.js';
// import { selectionSort } from './arraySorting.js';
// import { insertionSort } from './arraySorting.js';
// import { mergeSort } from './arraySorting.js';
// import { quickSort } from './arraySorting.js';
//  import { rearrangeWithExtraSpace } from './negtaivePostiveArray.js';
//difference let var const
//  function exampleVar() {
//     console.log(x); // undefined (due to hoisting)
//     var x = 5;
//     console.log(x); // 5
// }
// function exampleLetConst() {
//  //console.log(y); // ReferenceError: y is not defined (hoisting, but no initialization)
//     let y = 10;
//     const z = 20;
//     y = 15; // Works fine
//      z = 25; // TypeError: Assignment to constant variable.
//     console.log(y, z); // 15, 20
// }
// exampleVar();
// exampleLetConst();
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
//     };
// }
// const newFunction = outerFunction('outside');
// newFunction('inside'); // Logs: Outer: outside, Inner: inside
// // Hoisting in JavaScript
// console.log(x); // undefined due to hoisting
// var x = 5;
// console.log(foo()); // "Hello" due to function hoisting
// function foo() {
//     return "Hello";
// }
// /. Arrow Functions and this in JavaScript
// const myObject = {
//     regularFunction: function() {
//         console.log(this); // Refers to `myObject`
//     },
//     arrowFunction: () => {
//         console.log(this); // Refers to the global object or outer lexical context
//     }
// };
// myObject.regularFunction(); // Logs: myObject
// myObject.arrowFunction();   // Logs: global object (or undefined in strict mode)
// Shallow vs. Deep Cloning in JavaScript
// const original = { a: 1, b: { c: 2 } };
// const shallowClone = Object.assign({}, original);
// shallowClone.b.c = 3;
// console.log(original.b.c); // 3 (shallow copy shares reference)
// const deepClone = JSON.parse(JSON.stringify(original));
// deepClone.b.c = 4;
// console.log(original.b.c); // 2 (deep copy doesn't share reference)
// Map, Filter, and Reduce
const numbers = [1, 2, 3, 4];
// map example
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
// filter example
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
// reduce example
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
// bubbleSort();
// selectionSort();
// insertionSort();
// mergeSort();
// quickSort();
// src/app.js
// rearrangeWithExtraSpace();
// dutchNationalFlag();
// findDuplicates();
// var pivotIndex = function(nums) {
//     let total_sum = nums.reduce((acc, num) => acc + num, 0);
//     let left_sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         // Check if left sum is equal to right sum
//         if (left_sum === total_sum - left_sum - nums[i]) {
//             return i;
//         }
//         left_sum += nums[i]; // Update left sum for the next iteration
//         console.log("Current Left Sum:", left_sum);
//     }
//     return -1; // No pivot index found
// };
// function findMinMax(arr){
//     if(arr.length<0){
//         return '';
//     }
//     let min = arr[0];
//     let max = arr[0];
//     // Traverse the array starting from the second element
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];  // Update min if the current element is smaller
//         }
//         if (arr[i] > max) {
//             max = arr[i];  // Update max if the current element is larger
//         }
//     }
//     // Return the min and max values
//     return { min: min, max: max };
// }
// let arr1 = [22, 14, 8, 17, 35, 3];
// let result1 = findMinMax(arr1);
// console.log(result1)
// function reverseArray(arr){
// //    using for loop
// if (arr.length === 0) return [];
// let reverseArr=[];
// for(let i=arr.length-1;i>=0;i--){
//     reverseArr.push(arr[i])
// }
// return reverseArr;
//     // return arr.reverse();
//         // let start=0;
//         // let end=arr.length-1;
//         // while (start < end) {
//         //     // Swap the elements at start and end
//         //     let temp = arr[start];
//         //     arr[start] = arr[end];
//         //     arr[end] = temp;
//         //     // Move the pointers
//         //     start++;
//         //     end--;
//         // }
//         // return arr;
// }
// let array = [22, 14, 8, 17, 35, 3];
// let result = reverseArray(array);
// console.log(result)
// function reverseWords(str) {
//     // Step 1: Split the string into an array of words separated by dots
//     let words = str.split(".");
//     console.log(words)
//     // Step 2: Reverse the array of words
//     let reversedWords = words.reverse();
//     console.log(reversedWords);
//     // Step 3: Join the reversed words array back into a string, with dots between them
//     let result = reversedWords.join(".");
//     return result;
// }
// // Test cases
// let str1 = "i.like.this.program.very.much";
// console.log(reverseWords(str1)); // Output: much.very.program.this.like.i
// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         console.log(digits.length - 1);
//         // Increment the current digit by 1
//         digits[i]++;
//         // console.log(`After increment, digits[${i}] = ${digits[i]}`);
//         // If the current digit is less than 10, no carry is required, return the result
//         if (digits[i] < 10) {
//             // console.log("No carry required, final digits:", digits);
//             return digits;
//         }
//         // If the current digit becomes 10, set it to 0 and continue the loop for the next digit
//         digits[i] = 0;
//         // console.log(`Carry occurred, setting digits[${i}] to 0. Updated digits:`, digits);
//     }
//     // If all digits were 9, we would have rolled over all digits to 0, so prepend 1
//     digits.unshift(1);
//     console.log("All digits were 9, prepending 1. Final digits:", digits);
//     return digits;
// };
// // Example usage
// let digits = [9, 9, 9];
// console.log("Resulting digits:", plusOne(digits));
