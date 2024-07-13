function isNullValue(value) {
    return value === null;
}

// Test cases
console.log(isNullValue(null));         // true
console.log(isNullValue(undefined));    // false
console.log(isNullValue(0));            // false
console.log(isNullValue("Hello"));      // false
console.log(isNullValue({}));           // false
