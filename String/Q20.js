function formatted_string(padString, targetLength, direction = 'r') {
    const str = String(targetLength); // Convert targetLength to string
    const padLength = padString.length; // Length of the padding string

    if (direction === 'l') {
        return padString.slice(0, padLength) + str.padStart(targetLength.length, '0');
    } else {
        return str.padEnd(targetLength.length, padString.charAt(0));
    }
}

// Test Data
console.log(formatted_string('0000', 123, 'l')); //  Output: "0123"
console.log(formatted_string('00000000', 123, '')); //  Output: "12300000"
