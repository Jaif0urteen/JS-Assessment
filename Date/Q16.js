function days_passed(date) {
    // Calculate the current day of the year (0-364/365)
    let startOfYear = new Date(date.getFullYear(), 0, 0);
    let diff = date - startOfYear;
    let oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    let dayOfYear = Math.floor(diff / oneDay);

    return dayOfYear;
}

// Test cases
console.log(days_passed(new Date(2015, 0, 15))); // 15 (January 15th)
console.log(days_passed(new Date(2015, 11, 14))); // 348 (December 14th)
