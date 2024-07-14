function getMonthStartDate(date) {
    // Copy date so we don't modify the original
    let d = new Date(date);
    
    // Set to the beginning of the month
    d.setDate(1); // Set to the 1st day of the month
    d.setHours(0, 0, 0, 0); // Set to the start of the day
    
    return d;
}

// Test with current date
let currentDate = new Date();
let monthStartDate = getMonthStartDate(currentDate);

// Output formatted date (e.g., "Mon Jul 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)")
console.log(monthStartDate.toString());
