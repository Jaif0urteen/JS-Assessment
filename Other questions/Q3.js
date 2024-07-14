function extractUniqueCharacters(str) {
    // Use a Set to store unique characters
    let uniqueChars = new Set(str);
    
    // Convert Set back to an array and join into a string
    let uniqueString = [...uniqueChars].join('');
    
    // Return the string of unique characters
    return uniqueString;
}

// Example usage:
let inputString = "thequickbrownfoxjumpsoverthelazydog";
let uniqueChars = extractUniqueCharacters(inputString);
console.log(`Original string: ${inputString}`);
console.log(`Unique characters: ${uniqueChars}`);
