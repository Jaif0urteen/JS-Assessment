function isNaNValue(value) {
    return typeof value === 'number' && isNaN(value);
}

// Test cases
console.log(isNaNValue(NaN));          // true
console.log(isNaNValue(123));          // false
console.log(isNaNValue("Hello"));      // false
console.log(isNaNValue(undefined));    // false
console.log(isNaNValue(null));         // false
