function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's an opening bracket, push its corresponding closing bracket onto the stack
        if (map[char]) {
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.pop() !== char) {
                return false;  // If not, it's invalid
            }
        }
    }

    // If the stack is empty, all brackets were matched; otherwise, it's invalid
    return stack.length === 0;
}

//O(n) N number of string



// Given a string s, return the longest palindromic substring in s.
function longestPalindrome(s) {
    if (s.length === 0) return "";
    
    let longest = ""; // Variable to store the longest palindromic substring

    // Helper function to check if a substring is a palindrome
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Generate all substrings
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.substring(i, j);
            // Check if the current substring is a palindrome
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

//