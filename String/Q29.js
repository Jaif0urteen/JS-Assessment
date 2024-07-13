function search_word(str, word) {
    // Create a regular expression to match the word
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'g' for global search, 'i' for case insensitive
    const matches = str.match(regex); // Get all matches

    // Count occurrences
    const count = matches ? matches.length : 0;

    // Return the result
    return `'${word}' was found ${count} times.`;
}

// Test Data
console.log(search_word('The quick brown fox', 'fox'));       //  Output: "'fox' was found 1 times."
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));         //  Output: "'aa' was found 2 times."
