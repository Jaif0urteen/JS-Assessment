function string_endsWith(str, suffix) {
    return str.endsWith(suffix);
}

// Test Data
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); //  Output: true
console.log(string_endsWith('JS PHP PYTHON', ''));       //  Output: true (empty suffix is considered a match)
