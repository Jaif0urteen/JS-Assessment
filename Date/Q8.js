function date_diff_indays(date1Str, date2Str) {
    // Parse the dates
    let date1 = new Date(date1Str);
    let date2 = new Date(date2Str);

    // Calculate the time difference in milliseconds
    let timeDiff = date2.getTime() - date1.getTime();

    // Convert time difference from milliseconds to days
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
}

// Test cases
console.log(date_diff_indays('04/02/2014', '11/04/2014')); // 216 days
console.log(date_diff_indays('12/02/2014', '11/04/2014')); // -28 days
