function compare_strings(str1, str2) {
    // Normalize both strings to lowercase for case-insensitive comparison
    return str1.toLowerCase() === str2.toLowerCase();
}

// Test Data
console.log(compare_strings('abcd', 'AbcD')); //  Output: true
console.log(compare_strings('ABCD', 'Abce')); //  Output: false
