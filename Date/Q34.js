function hours_without_zeroes(date) {
    // Get the hour from the Date object (0-23)
    return date.getHours();
}

// Test case
let dt = new Date(1989, 10, 1); // November 1, 1989
console.log(hours_without_zeroes(dt)); // 0
