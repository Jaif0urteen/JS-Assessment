function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}

// Test cases
console.log(isChar('a'));     // true
console.log(isChar(''));      // false
console.log(isChar('abc'));   // false
console.log(isChar(1));       // false
console.log(isChar(null));    // false
console.log(isChar({}));      // false
