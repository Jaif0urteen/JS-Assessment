function ISO8601_week_no(date) {
    // Copy the date so we don't modify the original
    let d = new Date(date);

    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

    // Get first day of year
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    // Calculate full weeks to nearest Thursday
    let weekNumber = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

    return weekNumber;
}

// Test case
let dt = new Date(2015, 10, 1); // November 1, 2015
console.log(ISO8601_week_no(dt)); // 44
