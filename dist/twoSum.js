function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// Example usage:
const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // Output: [0, 1]
