function isValidZipCode(value) {
    // Regular expression to match US ZIP code format
    const zipCodePattern = /^\d{5}(-\d{4})?$/;
    return zipCodePattern.test(value);
}

// Test Data
console.log(isValidZipCode('12345'));      // true
console.log(isValidZipCode('12345-6789')); // true
console.log(isValidZipCode('1234'));       // false
console.log(isValidZipCode('12345-678'));  // false
console.log(isValidZipCode('ABCDE'));      // false
console.log(isValidZipCode('123456'));     // false
