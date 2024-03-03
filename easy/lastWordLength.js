//return the length of the last word in the string

const lengthOfLastWord = function(s) {
    let words = s.split(" ")

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== "") {
            return words[i].length
        }
    }
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))