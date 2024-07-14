function days_of_a_year(year) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year has 366 days
    } else {
        return 365; // Common year has 365 days
    }
}

// Test cases
console.log(days_of_a_year(2015)); // 365 days
console.log(days_of_a_year(2016)); // 366 days
