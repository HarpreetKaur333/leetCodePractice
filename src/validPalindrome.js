// Valid  Valid Palindrome Valid Palindrome
function isPalindrome(s) {
    // Step 1: Remove all non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Use two pointers to check if the string is a palindrome
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Time Complexity: O(n), where n is the length of the string s. 

// Space Complexity: O(n), where n is the length of the cleaned string. 
function isPalindrome(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleaned string is the same as its reverse
    return cleaned === cleaned.split('').reverse().join('');
}
// .split(''): Converts the string into an array of characters.
// .reverse(): Reverses the array.
// .join(''): Joins the reversed array back into a string.