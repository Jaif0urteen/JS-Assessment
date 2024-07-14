function timezone_offset_in_seconds(date) {
    // Get the timezone offset in minutes
    let offsetMinutes = date.getTimezoneOffset();

    // Convert minutes to seconds and adjust sign
    let offsetSeconds = offsetMinutes * 60;

    return offsetSeconds;
}

// Test case
let dt = new Date();
console.log(timezone_offset_in_seconds(dt)); // Example output: 19800
