import { JsxEmit } from "typescript";


function twoSum(nums, target) {
    const map = new Map(); // To store the numbers and their indices

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement of the current number

        // If the complement is found in the map, return the indices
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Otherwise, store the current number and its index in the map
        map.set(nums[i], i);
    }

    // If no solution is found, return an empty array (though the problem guarantees a solution)
    return [];
}

//O(n) n is numbe rof element in array





// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement)!, i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

// // Example usage:
// const result = twoSum([2, 7, 11, 15], 9);
// console.log(result);  // Output: [0, 1]


// Reverse a Linked List
// Question:
// Given the head of a singly linked list, reverse the list and return the reversed list's head.


class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    
    while (curr) {
        let nextTemp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
}

// Valid Parentheses
// Question:
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (stack.pop() !== map[s[i]]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));    // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true


//in javscript

// function isValid(s) {
//     const stack = [];
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             stack.push(s[i]);
//         } else {
//             if (stack.pop() !== map[s[i]]) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// }

// // Example usage:
// console.log(isValid("()"));     // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]"));     // false
// console.log(isValid("([)]"));   // false
// console.log(isValid("{[]}"));   // true


// in typescript
function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// in JS
// function lengthOfLongestSubstring(s) {
//     const map = new Map();
//     let maxLength = 0;
//     let left = 0;

//     for (let right = 0; right < s.length; right++) {
//         if (map.has(s[right])) {
//             // Move the left pointer to the right of the last occurrence of the repeating character
//             left = Math.max(left, map.get(s[right]) + 1);
//         }
        
//         // Update the last seen index of the current character
//         map.set(s[right], right);
        
//         // Calculate the current max length
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }


//two sorted list
// function mergeTwoLists(l1, l2) {
//     if (!l1) return l2; // If one list is empty, return the other
//     if (!l2) return l1;

//     let head = null;
//     let current = null;

//     // Initialize the head to the smaller of the first nodes
//     if (l1.val < l2.val) {
//         head = l1;
//         l1 = l1.next;
//     } else {
//         head = l2;
//         l2 = l2.next;
//     }

//     current = head;

//     // Loop through both lists
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }

//     // Attach the remaining part of the list
//     current.next = l1 || l2;

//     return head;
// }

//ts
function mergeTwoLists(
    l1: ListNode | null, 
    l2: ListNode | null
): ListNode | null {
    let dummy = new ListNode();
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    
    return dummy.next;
}

