function count(str, substring, caseSensitive = true) {
    if (!caseSensitive) {
        str = str.toLowerCase();
        substring = substring.toLowerCase();
    }
    
    let count = 0;
    let position = 0;

    while ((position = str.indexOf(substring, position)) !== -1) {
        count++;
        position += substring.length; // Move past the last found substring
    }
    
    return count;
}

// Test Data
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));         //  Output: 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));  //  Output: 1
