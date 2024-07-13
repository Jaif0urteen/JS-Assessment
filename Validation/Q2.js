function isError(value) {
    return value instanceof Error;
}

// Test cases
console.log(isError(new Error("This is an error"))); // true
console.log(isError(new TypeError("Type error")));    // true
console.log(isError("This is a string"));              // false
console.log(isError(123));                              // false
console.log(isError(null));                             // false
