function timeConvert(minutes) {
    if (minutes < 0) {
        return "Please enter a positive number of minutes.";
    }

    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;

    if (hours === 1 && remainingMinutes === 1) {
        return `${minutes} minute = 1 hour and 1 minute.`;
    } else if (hours === 1) {
        return `${minutes} minutes = 1 hour and ${remainingMinutes} minute(s).`;
    } else if (remainingMinutes === 1) {
        return `${minutes} minutes = ${hours} hour(s) and 1 minute.`;
    } else {
        return `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;
    }
}

// Test case
console.log(timeConvert(200)); // "200 minutes = 3 hour(s) and 20 minute(s)."
