function diff_days(dt1, dt2) {
    // Set to midnight to ignore time differences
    dt1.setHours(0, 0, 0, 0);
    dt2.setHours(0, 0, 0, 0);

    // Calculate the difference in milliseconds
    let diffMs = Math.abs(dt2 - dt1);

    // Convert milliseconds to days
    let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return diffDays;
}

// Test data
let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2014 11:13:00");

console.log(diff_days(dt1, dt2)); // Output: 6
