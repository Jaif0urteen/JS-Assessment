function isValidUKPostcode(value) {
    // Regular expression to match UK postcode format
    const postcodePattern = /^([A-Z]{1,2}\d[A-Z\d]?) ?\d[A-Z]{2}$/i;
    return postcodePattern.test(value);
}

// Test Data
console.log(isValidUKPostcode('SW1A 1AA')); // true
console.log(isValidUKPostcode('W1A 0AA'));  // true
console.log(isValidUKPostcode('M1 1AE'));   // true
console.log(isValidUKPostcode('12345'));    // false
console.log(isValidUKPostcode('SW1A1AA'));  // false
console.log(isValidUKPostcode('AA1 1AA'));  // true
console.log(isValidUKPostcode('B1 1AA'));   // true
