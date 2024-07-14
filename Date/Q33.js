function hours_with_zeroes(date) {
    // Get the hour from the Date object (0-23)
    let hours = date.getHours();

    // Convert 24-hour format to 12-hour format
    let formattedHours = (hours % 12 || 12); // Handle midnight (0) as 12

    // Ensure the hour is formatted with two digits and leading zeros if necessary
    return ('0' + formattedHours).slice(-2);
}

// Test case
let dt = new Date(1989, 10, 1); // November 1, 1989
console.log(hours_with_zeroes(dt)); // "12"
