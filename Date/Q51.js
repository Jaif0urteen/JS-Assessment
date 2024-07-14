function getWeekEndDate(date) {
    // Copy date so we don't modify the original
    let d = new Date(date);
    
    // Set to the end of the week (Saturday)
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + (6 - d.getDay())); // Adjust to the nearest Saturday
    
    return d;
}

// Test with current date
let currentDate = new Date();
let weekEndDate = getWeekEndDate(currentDate);

// Output formatted date (e.g., "Sat Jul 20 2024 00:00:00 GMT+0000 (Coordinated Universal Time)")
console.log(weekEndDate.toString());
    