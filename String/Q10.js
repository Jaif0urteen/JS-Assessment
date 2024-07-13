function swapcase(str) {
    return str
        .split('')                                  // Split the string into an array of characters
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()) // Swap the case
        .join('');                                  // Join the array back into a string
}

// Test Data
console.log(swapcase('AaBbc')); // Output: "aAbBC"
