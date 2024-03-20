// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// my solution
const containsDuplicates = function(nums) {
    let obj = {}
    
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        
        if (obj[number] !== undefined) {
            obj[number] += 1
        } else {
            obj[number] = 1
        }
    }
    
    for (let number in obj) {
        if (obj[number] > 1 ) {
            return true
        }
    }

    return false
}


console.log(containsDuplicates([1,2,3,1]))                // true
console.log(containsDuplicates([1,2,3,4]))                // false
console.log(containsDuplicates([1,1,1,3,3,4,3,2,4,2]))    // true
console.log(containsDuplicates([1,2,3,4,5,6,7,8,9,10]))   // false


// O(n) solution
// Set is a collection of values, does not have any duplicates so it creates an object of the numbers but removes all dupes
// checking the "size" of the set returns its "length"
// we can then check that with the length of the array nums and see if theyre equal. If they are then there's no dupes


// const containsDuplicates = function(nums) {
//     const s = new Set(nums)
//     return s.size !== nums.length
// }