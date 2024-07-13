function isValidSSN(value) {
    // Regular expression to match the SSN format
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
    return ssnPattern.test(value);
}

// Test Data
console.log(isValidSSN('123-45-6789')); // true
console.log(isValidSSN('123-45-678'));  // false
console.log(isValidSSN('123-456-7890')); // false
console.log(isValidSSN('12-345-6789')); // false
console.log(isValidSSN('123-45-678x')); // false
console.log(isValidSSN('123-45-6789')); // true
