function diff_months(dt1, dt2) {
    // Get the difference in months and adjust for the date difference
    let months = (dt2.getFullYear() - dt1.getFullYear()) * 12 + (dt2.getMonth() - dt1.getMonth());

    // Adjust the difference if dt2's date is earlier in the month than dt1
    if (dt2.getDate() < dt1.getDate()) {
        months--;
    }

    return months;
}

// Test data
let dt1 = new Date("June 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2014 11:13:00");

console.log(diff_months(dt1, dt2)); // Output: 4
