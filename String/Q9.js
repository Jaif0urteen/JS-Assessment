function capitalize_Words(str) {
    return str
        .split(' ')                                  // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' ');                                 // Join the array back into a string
}

// Test Data
console.log(capitalize_Words('js string exercises')); // Output: "Js String Exercises"
