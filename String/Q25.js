function alphabetize_string(str) {
    return str.split('')         // Split the string into an array of characters
              .sort((a, b) => a.localeCompare(b)) // Sort the array of characters
              .join('');         // Join the sorted characters back into a string
}

// Test Data
console.log(alphabetize_string('United States')); // Output: "SUadeeinsttt"
