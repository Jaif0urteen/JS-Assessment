function yesterday(dateString) {
    // Parse the input date string
    let date = new Date(dateString);

    // Calculate yesterday's date
    date.setDate(date.getDate() - 1);

    return date.toString();
}

// Test cases
console.log(yesterday('Nov 15, 2014')); // "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
console.log(yesterday('Nov 16, 2015')); // "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
console.log(yesterday('Nov 17, 2016')); // "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
