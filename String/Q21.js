function repeat_string(str, count = 1) {
    if (typeof str !== 'string' || count < 1) {
        return "Error in string or count.";
    }
    
    return str.repeat(count);
}

// Test Data
console.log(repeat_string('a', 4)); //  Output: "aaaa"
console.log(repeat_string('a'));    //  Output: "a"
console.log(repeat_string('a', 0)); //  Output: "Error in string or count."
console.log(repeat_string(5, 4));   //  Output: "Error in string or count."
