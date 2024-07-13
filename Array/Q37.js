function array_filled(length, value) {
    return Array(length).fill(value);
}

// Test Data
console.log(array_filled(3, 'default value')); //  Output: ["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));      //  Output: ["password", "password", "password", "password"]
