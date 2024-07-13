function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Test cases
console.log(isNumber(42));           // true
console.log(isNumber(3.14));         // true
console.log(isNumber(NaN));          // false
console.log(isNumber("Hello"));      // false
console.log(isNumber(null));         // false
console.log(isNumber(undefined));    // false
console.log(isNumber({}));           // false
console.log(isNumber(Infinity));     // true
