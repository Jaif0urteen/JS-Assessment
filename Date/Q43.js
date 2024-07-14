function add_months(date, months) {
    // Copy the original date to avoid modifying the original object
    let newDate = new Date(date);

    // Calculate the target month and year
    let targetMonth = newDate.getMonth() + months;
    let targetYear = newDate.getFullYear();

    // Adjust the year if the target month overflows
    if (targetMonth >= 12) {
        targetYear += Math.floor(targetMonth / 12);
        targetMonth = targetMonth % 12;
    }

    // Set the new month and year
    newDate.setMonth(targetMonth);
    newDate.setFullYear(targetYear);

    return newDate;
}

// Test case
let dt = new Date(2014, 10, 2); // November 2, 2014
console.log(add_months(dt, 10).toString());
