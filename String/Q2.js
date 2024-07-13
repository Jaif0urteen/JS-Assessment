function is_Blank(str) {
    return str.trim().length === 0;
}

// Test Data
console.log(is_Blank(''));         //  Output: true
console.log(is_Blank('abc'));      //  Output: false
console.log(is_Blank('   '));      //  Output: true (only whitespace)
