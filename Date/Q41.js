function add_years(date, years) {
    // Copy the original date to avoid modifying the original object
    let newDate = new Date(date);

    // Add the specified number of years
    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
}

// Test case
let dt = new Date(2014, 10, 2); // November 2, 2014
console.log(add_years(dt, 10).toString());
