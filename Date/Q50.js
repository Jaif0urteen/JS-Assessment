function getWeekStartDate(date) {
    // Copy date so we don't modify the original
    let d = new Date(date);
    
    // Set to the beginning of the week (Sunday)
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - d.getDay()); // Adjust to the nearest Sunday
    
    return d;
}

// Test with current date
let currentDate = new Date();
let weekStartDate = getWeekStartDate(currentDate);

// Output formatted date (e.g., "Sun Jul 14 2024 00:00:00 GMT+0000 (Coordinated Universal Time)")
console.log(weekStartDate.toString());
