"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rearrangeWithExtraSpace = rearrangeWithExtraSpace;
function rearrangeWithExtraSpace(arr) {
    let negative = [];
    let positive = [];
    // Separate negatives and positives
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i]);
        }
        else {
            positive.push(arr[i]);
        }
    }
    // Concatenate the negatives and positives
    return negative.concat(positive);
}
// Test case
let arr = [-1, 2, -3, 4, 5, -6, -7, 8, 9];
console.log(rearrangeWithExtraSpace(arr)); // Output: [-1, -3, -6, -7, 2, 4, 5, 8, 9]
