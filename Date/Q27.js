function short_months(date) {
    // Define options to format the date
    let options = { month: 'short' };

    // Use toLocaleDateString() with the specified options
    return date.toLocaleDateString('en-US', options);
}

// Test case
let dt = new Date(2015, 10, 1); // November 1, 2015
console.log(short_months(dt)); // "Nov"
