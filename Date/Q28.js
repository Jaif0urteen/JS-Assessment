function full_year(date) {
    // Get the full year (4 digits) from the Date object
    return date.getFullYear();
}

// Test case
let dt = new Date(2015, 10, 1); // November 1, 2015
console.log(full_year(dt)); // 2015
