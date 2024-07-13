function isFirstCharacterUppercase(str) {
    // Check if the string is not empty and the first character is uppercase
    if (str.length > 0 && str[0] === str[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

// Test Data
console.log(isFirstCharacterUppercase('Hello')); //  Output: true
console.log(isFirstCharacterUppercase('hello')); //  Output: false
console.log(isFirstCharacterUppercase('JavaScript')); //  Output: true
console.log(isFirstCharacterUppercase('javaScript')); //  Output: false
console.log(isFirstCharacterUppercase('')); //  Output: false
