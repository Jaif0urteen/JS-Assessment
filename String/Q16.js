function text_truncate(str, maxLength = str.length, ellipsis = '…') {
    if (str.length <= maxLength) {
        return str; // Return the original string if it's within the limit
    }
    
    return str.slice(0, maxLength - ellipsis.length) + ellipsis; // Truncate and append ellipsis
}

// Test Data
console.log(text_truncate('We are doing JS string exercises.'));           // Output: "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19));       // Output: "We are doing JS ..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // Output: "We are doing !!"
