// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

const isPowerOfTwo = function(n) {
    let number = n

    while (number > 1 && number % 2 === 0) {
        number = number / 2
    }

    return number === 1
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(128))
console.log(isPowerOfTwo(395))