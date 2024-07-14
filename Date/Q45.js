function diff_hours(dt1, dt2) {
    // Calculate the difference in milliseconds
    let diffMs = Math.abs(dt2 - dt1);

    // Convert milliseconds to hours
    let diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    return diffHours;
}

// Test data
let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 13, 2014 11:13:00");

console.log(diff_hours(dt1, dt2)); // Output: 3
