"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = bubbleSort;
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    // Outer loop
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        // Inner loop for comparison and swapping
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no elements were swapped, the array is already sorted
        if (!swapped)
            break;
    }
    return arr;
}
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
function selectionSort(arr) {
    let n = arr.length;
    // One by one move the boundary of the unsorted part
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted part
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element of the unsorted part
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// Test case
let arr2 = [29, 10, 14, 37, 13];
console.log(selectionSort(arr2)); // Output: [10, 13, 14, 29, 37]
function insertionSort(arr) {
    let n = arr.length;
    // Start from the second element
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// Test case
let arr3 = [12, 11, 13, 5, 6];
console.log(insertionSort(arr3)); // Output: [5, 6, 11, 12, 13]
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // Divide the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // Recursively sort the two halves
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    // Merge the two halves while comparing the elements
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        }
        else {
            sortedArr.push(right[j]);
            j++;
        }
    }
    // Append the remaining elements from the left and right halves
    return sortedArr.concat(left.slice(i)).concat(right.slice(j));
}
// Test case
let arr4 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr4)); // Output: [3, 9, 10, 27, 38, 43, 82]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // Choose the pivot (we'll take the last element as the pivot)
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    // Partition the array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    // Recursively sort the left and right arrays and concatenate them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}
// Test case
let arr5 = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr5)); // Output: [1, 5, 7, 8, 9, 10]
