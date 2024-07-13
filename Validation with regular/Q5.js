function customTrim(str) {
    // Use regular expression to replace leading and trailing whitespace
    return str.replace(/^\s+|\s+$/g, '');
}

// Test Data
console.log(customTrim('   Hello, World!   ')); // Output: "Hello, World!"
console.log(customTrim('   Trim this string.   ')); // Output: "Trim this string."
console.log(customTrim('NoSpaces')); // Output: "NoSpaces"
