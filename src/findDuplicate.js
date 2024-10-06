export  function findDuplicates(arr) {

    //simple approach

    // let duplicates = []; //declare duplicate Array

    // // Outer loop to check each element 
    // for (let i = 0; i < arr.length; i++) {
    //     let isDuplicate = false;

    //     // Inner loop to compare the current element with the rest of the array
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             isDuplicate = true;
    //             break;
    //         }
    //     }

    //     // Check if the element is a duplicate and not already added to the result array
    //     if (isDuplicate && !duplicates.includes(arr[i])) {
    //         duplicates.push(arr[i]);
    //     }
    // }

    // return duplicates;


    //find using SEt

    // let uniqueElements = new Set(); //new Set //store unique value of entrie arrya and ignore the dup;icate value
    // let duplicates = new Set(); //duplicate Set

    // for (let i = 0; i < arr.length; i++) {
    //     if (uniqueElements.has(arr[i])) { //has check current element already present in the uniqueElements set
    //         duplicates.add(arr[i]);
    //     } else {
    //         uniqueElements.add(arr[i]); //not in array , then added into duplicates Array
    //     }
    // }

    // return Array.from(duplicates);


    //using hash Map
    let elementCount = {}; //create object with key value
    let duplicates = [];

    // Step 1: Count the occurrences of each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (elementCount[arr[i]]) {
            elementCount[arr[i]]++;
        } else {
            elementCount[arr[i]] = 1;
        }
    }

    console.log(elementCount);

    // Step 2: Collect elements that have more than one occurrence
    for (let key in elementCount) {
        if (elementCount[key] > 1) {
            duplicates.push(parseInt(key));
        }
    }

    return duplicates;
    
}

// Test cases
let arr1 = [2, 10, 10, 100, 2, 10, 11, 2, 11, 2];
console.log(findDuplicates(arr1)); // Output: [2, 10, 11]

// let arr2 = [5, 40, 1, 40, 100000, 1, 5, 1];
// console.log(findDuplicates(arr2)); // Output: [5, 40, 1]
