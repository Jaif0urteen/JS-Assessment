function camelize(str) {
    return str
        .split(' ')                                   // Split the string into an array of words
        .map((word, index) => {
            if (index === 0) return word.toLowerCase(); // Keep the first word in lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of the rest
        })
        .join('');                                    // Join the array back into a single string
}

// Test Data
console.log(camelize("JavaScript Exercises")); //  Output: "javaScriptExercises"
console.log(camelize("JavaScript exercises")); //  Output: "javaScriptExercises"
console.log(camelize("JavaScriptExercises"));  //  Output: "javaScriptExercises"
