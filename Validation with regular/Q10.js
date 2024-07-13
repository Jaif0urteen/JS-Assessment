function isAlphanumeric(value) {
    // Regular expression to check for alphanumeric characters
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    return alphanumericPattern.test(value);
}

// Test Data
console.log(isAlphanumeric('abc123')); // true
console.log(isAlphanumeric('abc123!')); // false
console.log(isAlphanumeric('123456')); // true
console.log(isAlphanumeric('HelloWorld')); // true
console.log(isAlphanumeric('Hello World')); // false
