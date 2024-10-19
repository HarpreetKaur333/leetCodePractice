//Reverse a Linked List
// Question: Given the head of a singly linked list, reverse the list and return the reversed list's head.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        let nextTemp = curr.next;  // Store next node
        curr.next = prev;          // Reverse the current node's pointer
        prev = curr;               // Move prev to current
        curr = nextTemp;           // Move current to next
    }
    
    return prev;
}


//Find the Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Remove characters from the left until no duplicates
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


// string s is called happy if it satisfies the following conditions:


function longestHappyString(a, b, c) {
    let result = '';

    // Create a list of tuples, each containing the count and the character
    let counts = [
        [a, 'a'],
        [b, 'b'],
        [c, 'c']
    ];

    while (true) {
        // Sort counts based on the number of available characters in descending order
        counts.sort((x, y) => y[0] - x[0]);

        // Check if we can add the most frequent character
        let added = false;
        for (let i = 0; i < counts.length; i++) {
            let [count, char] = counts[i];

            // If the character is not available, we stop
            if (count === 0) break;

            // Check if adding this character would result in three consecutive same characters
            if (result.length >= 2 && result[result.length - 1] === char && result[result.length - 2] === char) {
                continue; // Skip adding this character
            }

            // Add the character to the result
            result += char;
            counts[i][0]--;  // Decrement the count of that character
            added = true;
            break;
        }
    }
}