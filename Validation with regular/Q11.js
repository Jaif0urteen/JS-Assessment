function isTimeString(value) {
    // Regular expression to match the time format HH:MM
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(value);
}

// Test Data
console.log(isTimeString('14:30')); // true
console.log(isTimeString('23:59')); // true
console.log(isTimeString('00:00')); // true
console.log(isTimeString('12:60')); // false
console.log(isTimeString('24:00')); // false
console.log(isTimeString('12:34:56')); // false
console.log(isTimeString('hello')); // false
