function titleCase(str) {
    return str.split(' ').map(word => {
        if (word.length === 0) return ''; // Handle empty words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Test Data
console.log(titleCase('PHP exercises. python exercises.')); // Output: "Php Exercises. Python Exercises."
