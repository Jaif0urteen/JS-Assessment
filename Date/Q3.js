function getDaysInMonth(month, year) {
    // Use 0 for the day parameter to get the last day of the previous month
    return new Date(year, month, 0).getDate();
}

// Test cases
console.log(getDaysInMonth(1, 2012)); // January 2012 => 31 days
console.log(getDaysInMonth(2, 2012)); // February 2012 => 29 days (leap year)
console.log(getDaysInMonth(9, 2012)); // September 2012 => 30 days
console.log(getDaysInMonth(12, 2012)); // December 2012 => 31 days
