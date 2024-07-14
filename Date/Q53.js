function getMonthEndDate(date) {
    // Copy date so we don't modify the original
    let d = new Date(date);
    
    // Move to the next month and set to the 0th day (last day of current month)
    d.setMonth(d.getMonth() + 1);
    d.setDate(0); // Sets the date to the last day of the previous month
    
    // Set to the end of the day
    d.setHours(23, 59, 59, 999); // Set to the end of the day
    
    return d;
}

// Test with current date
let currentDate = new Date();
let monthEndDate = getMonthEndDate(currentDate);

// Output formatted date (e.g., "Wed Jul 31 2024 23:59:59 GMT+0000 (Coordinated Universal Time)")
console.log(monthEndDate.toString());
