function short_year(date) {
    // Get the full year (4 digits) from the Date object
    let fullYear = date.getFullYear();

    // Extract the last two digits
    let shortYear = ('' + fullYear).slice(-2);

    return shortYear;
}

// Test case
let dt = new Date(1989, 10, 1); // November 1, 1989
console.log(short_year(dt)); // "89"
