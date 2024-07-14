function get_timezone(date) {
    // Get the timezone offset in minutes
    let timezoneOffset = date.getTimezoneOffset();

    // Create an Intl.DateTimeFormat object for the current locale
    let timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return timeZoneName;
}

// Test case
let dt = new Date();
console.log(get_timezone(dt)); // Example output: "India Standard Time"
