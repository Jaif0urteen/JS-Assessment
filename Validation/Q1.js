function isBoolean(value) {
    return typeof value === 'boolean';
}

// Test cases
console.log(isBoolean(true));  // true
console.log(isBoolean(false)); // true
console.log(isBoolean(1));     // false
console.log(isBoolean("true")); // false
console.log(isBoolean(null));   // false
