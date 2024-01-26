var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let num1 = nums[i]
            let num2 = nums[j]
            if (num1 + num2 === target) {
                return [i, j]
            }
        }
    }
};


console.log(twoSum([3,2,4], 6))


// Better time complexity using Objects

var twoSum = function (nums, target) {
    const mp = {}
 
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
    
        if (diff in mp) return [i, mp[diff]]
 
        mp[nums[i]] = i
    }
 }