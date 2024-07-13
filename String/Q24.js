function truncate(str, numWords) {
    const words = str.split(' '); // Split the string into an array of words
    const truncated = words.slice(0, numWords).join(' '); // Take the first numWords words and join them back into a string
    return truncated;
}

// Test Data
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); //  Output: "The quick brown fox"
