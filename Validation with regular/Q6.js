function countWords(str) {
    // Remove leading and trailing whitespace
    str = str.trim();
    
    // Replace multiple spaces with a single space
    str = str.replace(/\s{2,}/g, ' ');
    
    // Exclude empty strings and count words
    return str.length > 0 ? str.split(' ').length : 0;
}

// Test Data
console.log(countWords('   Hello,    World!   ')); // Output: 2
console.log(countWords('   This is   a test.   ')); // Output: 5
console.log(countWords('')); // Output: 0
console.log(countWords('   Multiple     spaces     here.   ')); // Output: 5
console.log(countWords('\n  One more example.   ')); // Output: 4
