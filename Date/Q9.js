function lastday(year, month) {
    // Create a Date object for the next month's 0th day (which is the last day of the current month)
    return new Date(year, month + 1, 0).getDate();
}

// Test cases
console.log(lastday(2014, 0)); // January 2014 => 31 days
console.log(lastday(2014, 1)); // February 2014 => 28 days (non-leap year)
console.log(lastday(2014, 11)); // December 2014 => 31 days
