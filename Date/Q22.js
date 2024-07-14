function ISO_numeric_date(date) {
    // Get the day of the week (0-6, where 0 is Sunday)
    let dayOfWeek = date.getDay();

    // Adjust the day of the week to ISO-8601 standard (1-7, where 1 is Monday and 7 is Sunday)
    // Sunday (0) should be adjusted to 7
    if (dayOfWeek === 0) {
        return 7;
    } else {
        return dayOfWeek;
    }
}

// Test case
let dt = new Date(2015, 10, 1); // November 1, 2015
console.log(ISO_numeric_date(dt)); // 7
