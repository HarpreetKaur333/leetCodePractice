"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dutchNationalFlag = dutchNationalFlag;
function dutchNationalFlag(arr) {
    // let low = 0;
    // let mid = 0;
    // let high = arr.length - 1;
    // while (mid <= high) {
    //     if (arr[mid] === 0) {
    //         // Swap arr[low] and arr[mid], then increment both low and mid
    //         [arr[low], arr[mid]] = [arr[mid], arr[low]];
    //         low++;
    //         mid++;
    //     } else if (arr[mid] === 1) {
    //         // Simply increment mid
    //         mid++;
    //     } else if (arr[mid] === 2) {
    //         // Swap arr[mid] and arr[high], then decrement high
    //         [arr[mid], arr[high]] = [arr[high], arr[mid]];
    //         high--;
    //     }
    // }
    // return arr;
    //second approach
    let count0 = 0, count1 = 0, count2 = 0;
    // Step 1: Count the number of 0s, 1s, and 2s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count0++;
        }
        else if (arr[i] === 1) {
            count1++;
        }
        else if (arr[i] === 2) {
            count2++;
        }
    }
    // Step 2: Overwrite the original array based on the counts
    let index = 0;
    while (count0 > 0) {
        arr[index++] = 0;
        count0--;
    }
    while (count1 > 0) {
        arr[index++] = 1;
        count1--;
    }
    while (count2 > 0) {
        arr[index++] = 2;
        count2--;
    }
    return arr;
}
// Test case
let arr = [2, 0, 2, 1, 1, 0, 0, 1];
console.log(dutchNationalFlag(arr)); // Output: [0, 0, 1, 1, 2, 2]
