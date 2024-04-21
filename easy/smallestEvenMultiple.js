// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

const smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n * 2
}

console.log(smallestEvenMultiple(5))
console.log(smallestEvenMultiple(6))
console.log(smallestEvenMultiple(72))
console.log(smallestEvenMultiple(411))