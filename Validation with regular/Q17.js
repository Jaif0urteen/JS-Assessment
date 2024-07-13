function isValidHexColor(value) {
    // Regular expression to match hex color values
    const hexColorPattern = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorPattern.test(value);
}

// Test Data
console.log(isValidHexColor('#FFFFFF')); // true
console.log(isValidHexColor('#abc'));    // true
console.log(isValidHexColor('123456'));  // true
console.log(isValidHexColor('#123abc')); // true
console.log(isValidHexColor('#12G'));    // false
console.log(isValidHexColor('XYZ'));     // false
console.log(isValidHexColor('#12345'));  // false
console.log(isValidHexColor('#1234567')); // false
