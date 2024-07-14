function sortString(str) {
    // Split the string into an array of characters
    let chars = str.split('');
    
    // Sort the array of characters alphabetically
    chars.sort();
    
    // Join the sorted array back into a string
    let sortedStr = chars.join('');
    
    // Return the sorted string
    return sortedStr;
}

// Example usage:
let inputString = "hello";
let sortedString = sortString(inputString);
console.log(`Original string: ${inputString}`);
console.log(`Sorted string: ${sortedString}`);
