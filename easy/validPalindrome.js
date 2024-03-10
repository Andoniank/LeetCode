// check to see if the string is a valid palindrome
// a valid palindrome is the same forwards and backwards after removing all non-alphabetic characters such as spaces and commas


const isPalindrome = function(s) {
    const base = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');       // remove all non-alphabetic characters and lowercase all characters
    const reverse = base.split("").reverse().join("")                // reverse them (only arrays can be reversed so must be split first then joined back)
    return base === reverse                                          // compare to see if they're equal
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))   // true
console.log(isPalindrome("race a car"))                       // false
console.log(isPalindrome(" "))                                // true