function hex_to_ascii(hex) {
    let str = ''; // Initialize an empty string to build the result
    for (let i = 0; i < hex.length; i += 2) {
        // Get the substring of two characters
        const hexPair = hex.substr(i, 2);
        // Convert the hex pair to an ASCII character and append to the result string
        str += String.fromCharCode(parseInt(hexPair, 16));
    }
    return str; // Return the resulting ASCII string
}

// Test Data
console.log(hex_to_ascii('3132'));    // Output: "12"
console.log(hex_to_ascii('313030'));  // Output: "100"
