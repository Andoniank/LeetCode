//check to see if num is a paledrome same number if the indiviual indexes are written in reverse)

function palindromeNumber(num) {
    let reverse = num.toString().split("").reverse().join("")
    let reverseNum = parseInt(reverse)
    return reverseNum === num
}

console.log(palindromeNumber(3946))
console.log(palindromeNumber(1221))
