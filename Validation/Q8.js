function isRegExp(value) {
    return value instanceof RegExp;
}

// Test cases
console.log(isRegExp(/abc/));            // true
console.log(isRegExp(new RegExp('abc')));// true
console.log(isRegExp('abc'));             // false
console.log(isRegExp(123));               // false
console.log(isRegExp(null));              // false
console.log(isRegExp({}));                // false
