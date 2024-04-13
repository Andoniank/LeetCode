// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

const toLowerCase = function(s) {
    let result = ""

    for (let i = 0; i < s.length; i++) {
        result += s[i].toLowerCase()
    }

    return result
}

console.log(toLowerCase("Hello"))
console.log(toLowerCase("here"))
console.log(toLowerCase("LOVELY"))