const longestCommonPrefix = function(strs) {
    let result = ""

    for (let i = 0; i < strs[0].length; i++) {
        for(let j = 0; j < strs.length; j++) {
            let char = strs[j][i]
            let char2 = strs[i][j]
            
            return char
            
        }
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["there", "their", "they're"]))