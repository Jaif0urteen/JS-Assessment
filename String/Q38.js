function case_insensitive_search(str, searchTerm) {
    // Convert both the main string and the search term to lowercase
    if (str.toLowerCase().includes(searchTerm.toLowerCase())) {
        return "Matched";
    } else {
        return "Not Matched";
    }
}

// Test Data
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); //  Output: "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); //  Output: "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); //  Output: "Not Matched"
