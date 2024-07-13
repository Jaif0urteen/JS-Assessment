function array_filled(length, value) {
    return Array(length).fill(value);
}

// Test Data
console.log(array_filled(6, 0));  //  Output: [0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11)); //  Output: [11, 11, 11, 11]
