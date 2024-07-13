function ascii_to_hexa(str) {
    return str.split('')                      // Split the string into an array of characters
              .map(char => char.charCodeAt(0).toString(16)) // Convert each character to its ASCII value and then to hex
              .join('');                       // Join the array of hex values into a single string
}

// Test Data
console.log(ascii_to_hexa('12'));    //  Output: "3132"
console.log(ascii_to_hexa('100'));   //  Output: "313030"
