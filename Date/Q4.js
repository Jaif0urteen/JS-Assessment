function month_name(date) {
    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    // Get the month index (0-11)
    let monthIndex = date.getMonth();
    
    // Return the month name from the array
    return monthNames[monthIndex];
}

// Test cases
console.log(month_name(new Date("10/11/2009"))); // "October"
console.log(month_name(new Date("11/13/2014"))); // "November"
