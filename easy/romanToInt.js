const romanToInt = function(s) {
    let count = 0
    let nums = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        let previous = s[i - 1]
        
        if (current === "V" && previous === "I" ) {
            count += 3
        } else if (current === "X" && previous === "I") {
            count += 8
        } else if (current === "L" && previous === "X") {
            count += 30
        } else if (current === "C" && previous === "X") {
            count += 80
        } else if (current === "D" && previous === "C") {
            count += 300
        } else if (current === "M" && previous === "C") {
            count += 800
        } else {
            count += nums[current]
        }
    }
    return count
};

console.log(romanToInt("XIV"))       //14
console.log(romanToInt("III"))       //3
console.log(romanToInt("LVIII"))     //58
console.log(romanToInt("MCMXCIV"))   //1994