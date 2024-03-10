// check to see if the string is a valid palindrome
// a valid palindrome is the same forwards and backwards after removing all non-alphabetic characters such as spaces and commas


const isPalindrome = function(s) {
    const base = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverse = base.split("").reverse().join("")
    return base === reverse
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))