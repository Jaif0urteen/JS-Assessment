function seconds_with_leading_zeros(date) {
    // Get the seconds from the Date object (0-59)
    let seconds = date.getSeconds();

    // Ensure the seconds are formatted with two digits and leading zeros if necessary
    return ('0' + seconds).slice(-2);
}

// Test case
let dt = new Date(1989, 10, 1); // November 1, 1989
console.log(seconds_with_leading_zeros(dt)); // "00"
