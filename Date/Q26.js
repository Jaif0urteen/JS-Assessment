function numeric_month(date) {
    // Get the month from the Date object (0-indexed, so January is 0)
    let month = date.getMonth() + 1; // Adding 1 because getMonth() returns 0 for January

    // Ensure the month is formatted with two digits and leading zeros
    return ('0' + month).slice(-2); // Using slice(-2) to take the last two characters
}

// Test case
let dt = new Date(2015, 10, 1); // November 1, 2015
console.log(numeric_month(dt)); // "11"
