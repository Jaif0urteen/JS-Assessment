function isObject(value) {
    return value !== null && typeof value === 'object';
}

// Test cases
console.log(isObject({}));           // true
console.log(isObject([]));           // true
console.log(isObject(null));         // false
console.log(isObject(42));           // false
console.log(isObject("Hello"));      // false
console.log(isObject(undefined));    // false
console.log(isObject(new Date()));   // true
