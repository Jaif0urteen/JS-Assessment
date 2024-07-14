function diff_to_GMT(date) {
    // Get the timezone offset in minutes
    let offsetMinutes = date.getTimezoneOffset();

    // Convert minutes to hours and minutes
    let hours = Math.floor(Math.abs(offsetMinutes / 60));
    let minutes = Math.abs(offsetMinutes % 60);

    // Determine the sign of the offset (positive or negative)
    let sign = (offsetMinutes < 0) ? '+' : '-';

    // Format the result as "+HH.MM" (e.g., +05.500)
    return `${sign}${padNumber(hours, 2)}.${padNumber(minutes, 3)}`;
}

// Function to pad numbers with leading zeros
function padNumber(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

// Test case
let dt = new Date();
console.log(diff_to_GMT(dt)); // Example output: "+05.500"
