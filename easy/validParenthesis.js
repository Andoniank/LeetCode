const isValid = function(s) {
    const array = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            array.push(s[i]);
            count++;
        } else {
            if (array.length === 0) return false;
            const ch = array.pop();
            if ((s[i] === ')' && ch === '(') || (s[i] === ']' && ch === '[') || (s[i] === '}' && ch === '{')) {
            } else {
                return false;
            }
            count--;
        }
    }
    return count === 0;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("()-s8f(}P"))
console.log(isValid("(])([sf()"))