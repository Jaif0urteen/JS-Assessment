function zeroFill(value, width, sign = '') {
    // Convert the number to a string
    let stringValue = Math.abs(value).toString();

    // Add leading zeros
    while (stringValue.length < width) {
        stringValue = '0' + stringValue;
    }

    // Add the sign if needed
    if (sign && value >= 0) {
        stringValue = sign + stringValue;
    }

    return stringValue;
}

// Test Data
console.log(zeroFill(120, 5, '-')); //  Output: "+00120"
console.log(zeroFill(29, 4));       //  Output: "0029"
