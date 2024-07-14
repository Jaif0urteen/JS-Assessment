function diff_years(dt1, dt2) {
    // Calculate the difference in years
    let diffYears = dt2.getFullYear() - dt1.getFullYear();

    // Check if dt2's month and day are before dt1's month and day
    if (dt2.getMonth() < dt1.getMonth() || (dt2.getMonth() === dt1.getMonth() && dt2.getDate() < dt1.getDate())) {
        diffYears--;
    }

    return diffYears;
}

// Test data
let dt1 = new Date("June 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2017 11:13:00");

console.log(diff_years(dt1, dt2)); // Output: 3
