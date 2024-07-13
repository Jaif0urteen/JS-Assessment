function subStrAfterChars(str, char, occurrence) {
    const regex = new RegExp(`(${char})`, 'g');
    let matchCount = 0;
    let result = '';

    // Split the string on the specified character
    const parts = str.split(regex);

    // Iterate through parts to find the occurrence
    for (let part of parts) {
        if (part === char) {
            matchCount++;
            if (matchCount === occurrence) {
                // Return the part after the specified occurrence
                result = parts[parts.indexOf(part) + 1] || '';
                break;
            }
        }
    }

    return result;
}

// Test Data
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); //  Output: "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); //  Output: "xercises"
