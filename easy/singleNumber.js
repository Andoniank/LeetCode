// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const singleNumber = function(nums) {
    let copy = nums.sort((a, b) => a - b);            // make a copy of the array and sort it

    for (let i = 0; i <= nums.length - 1; i += 2) {   // loop through the array while iterating at 2
      if (copy[i] !== copy[i + 1]) {                  // check to see if the current iterration and the next are the same
        return copy[i];                               // if not return that number
      }
    }
  
    return copy[copy.length - 1];  
};



console.log(singleNumber([2,2,1]))              // 1
console.log(singleNumber([4,1,2,1,2]))          // 4
console.log(singleNumber([1]))                  // 1
console.log(singleNumber([1,3,5,7,2,7,5,3,1]))  // 2
console.log(singleNumber([1,2,3,2,3,1,5,5,6]))  // 6