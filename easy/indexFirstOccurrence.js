//return the index of the first occurrence of the needle(substring) in the haystack(string). 
//If the needle does not exist within the haystack return -1

const firstOccurrnece = function(haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
}

console.log(firstOccurrnece("sadbutsad", "sad"))
console.log(firstOccurrnece("leetcode", "leeto"))
console.log(firstOccurrnece("jisbdigb", "bdi"))
console.log(firstOccurrnece("this is a very long string of words", "of"))

