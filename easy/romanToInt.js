const romanToInt = function(s) {
    let count = 0
    let nums = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

    for (let i = 0; i < s.lengthl; i++) {
        let current = s[i]
        let previous = s[i - 1]
        count += current
    }

    return count
};

console.log(romanToInt("III"))       //3
console.log(romanToInt("LVIII"))     //58
console.log(romanToInt("MCMXCIV"))   //1994