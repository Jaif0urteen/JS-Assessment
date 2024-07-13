function isValidHex(value) {
    // Regular expression to match hexadecimal values
    const hexPattern = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexPattern.test(value);
}

// Test Data
console.log(isValidHex('#FFFFFF')); // true
console.log(isValidHex('#abc'));    // true
console.log(isValidHex('123456'));  // true
console.log(isValidHex('#123abc')); // true
console.log(isValidHex('#12G'));    // false
console.log(isValidHex('XYZ'));     // false
console.log(isValidHex('#12345'));  // false
