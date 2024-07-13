function isValidCanadianPostalCode(value) {
    // Regular expression to match Canadian postal code format
    const postalCodePattern = /^[A-Z]\d[A-Z] \d[A-Z]\d$/i;
    return postalCodePattern.test(value);
}

// Test Data
console.log(isValidCanadianPostalCode('K1A 0B1')); // true
console.log(isValidCanadianPostalCode('A2B 3C4')); // true
console.log(isValidCanadianPostalCode('12345'));    // false
console.log(isValidCanadianPostalCode('K1A0B1'));   // false
console.log(isValidCanadianPostalCode('K1A 0B1X')); // false
console.log(isValidCanadianPostalCode('B2B 2B2')); // true
