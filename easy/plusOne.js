//given an array of integers that act as a single large integer if combined, increment the combined arrays integer by 1
// and return the new array of integers 

const plusOne = function(digits) {
    let result = []

    for (let i = digits.length; i >= 0; i--) {
        if (i === digits.length && digits[i] !== 9) {
            result.unshift(digits[i] + 1)
        } else if (i === digits.length && digits[i] === 9) {
            result.unshift(0)
            result.unshift(1)
            i -= 1
        } else {
            result.unshift(digits[i])
        }
    }
    
    return result
};

console.log(plusOne([1,2,3]))    //expected: [1,2,4]
console.log(plusOne([4,3,2,1]))  //expected: [4,3,2,2]
console.log(plusOne([9]))        //expected: [1,0]