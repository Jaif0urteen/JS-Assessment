function minutes_with_leading_zeros(date) {
    // Get the minutes from the Date object (0-59)
    let minutes = date.getMinutes();

    // Ensure the minutes are formatted with two digits and leading zeros if necessary
    return ('0' + minutes).slice(-2);
}

// Test case
let dt = new Date(1989, 10, 1); // November 1, 1989
console.log(minutes_with_leading_zeros(dt)); // "00"
