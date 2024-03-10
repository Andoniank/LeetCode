// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const singleNumber = function(nums) {
    let copy = nums.sort((a, b) => a - b); 

    for (let i = 0; i <= nums.length - 1; i += 2) { 
      if (copy[i] !== copy[i + 1]) {
        return copy[i];
      }
    }
  
    return copy[copy.length - 1];  
};



console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))