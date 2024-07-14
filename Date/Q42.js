function add_weeks(date, weeks) {
    // Copy the original date to avoid modifying the original object
    let newDate = new Date(date);

    // Calculate the new date by adding weeks
    let daysToAdd = weeks * 7;
    newDate.setDate(newDate.getDate() + daysToAdd);

    return newDate;
}

// Test case
let dt = new Date(2014, 10, 2); // November 2, 2014
console.log(add_weeks(dt, 10).toString());
