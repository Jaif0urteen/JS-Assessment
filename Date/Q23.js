function english_ordinal_suffix(date) {
    // Get the day of the month from the Date object
    let dayOfMonth = date.getDate();

    // Determine the ordinal suffix based on the last digit of the day of the month
    let suffix = '';
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
        suffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        suffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    return dayOfMonth + suffix;
}

// Test case
let dt = new Date(2015, 10, 1); // November 1, 2015
console.log(english_ordinal_suffix(dt)); // "1st"
