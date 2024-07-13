function string_chop(str, chunkSize = str.length) {
    if (chunkSize <= 0) return []; // Return an empty array for invalid chunk sizes
    
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.slice(i, i + chunkSize)); // Slice the string into chunks
    }
    
    return chunks;
}

// Test Data
console.log(string_chop('w3resource'));      //  Output: ["w3resource"]
console.log(string_chop('w3resource', 2));   //  Output: ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3));   //  Output: ["w3r", "eso", "urc", "e"]
