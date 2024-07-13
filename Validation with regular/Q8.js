function countVowels(str) {
    // Regular expression to match vowels (case insensitive)
    const vowelPattern = /[aeiou]/gi;
    const matches = str.match(vowelPattern); // Find all matches
    return matches ? matches.length : 0; // Return the count or 0 if no matches
}

// Test Data
console.log(countVowels('United States'));  // Output: 5
