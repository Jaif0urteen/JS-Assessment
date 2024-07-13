function capitalize(str) {
    if (str.length === 0) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test Data
console.log(capitalize('js string exercises')); //  Output: "Js string exercises"
