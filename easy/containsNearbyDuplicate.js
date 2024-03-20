// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k.

// O(n)^2
const containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let num1 = nums[i]
            let num2 = nums[j]
            if(num1 === num2 && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
}

// this solution passes these test cases but does not pass all the test cases on leetcode due to test cases with very
// long num arrays as it exceeds the time limit. This is probably to prevent O(n)^2 solutions

console.log(containsNearbyDuplicate([1,2,3,1], 3))       // true
console.log(containsNearbyDuplicate([1,0,1,1], 1))       // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))   // false

