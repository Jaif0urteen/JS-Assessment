function insert(original, insertStr = '', position = 1) {
    // Adjust position to ensure it does not exceed the length of the original string
    position = Math.max(0, Math.min(position, original.length));
    return original.slice(0, position) + insertStr + original.slice(position);
}

// Test Data
console.log(insert('We are doing some exercises.'));                    // Output: "We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript '));    // Output: "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));// Output: "We are doing some JavaScript exercises."
