function humanize_format(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ''; // Return an empty string for invalid input
    }
    
    const absNum = Math.abs(num);
    let suffix = 'th'; // Default suffix

    if (absNum % 100 !== 11 && absNum % 10 === 1) {
        suffix = 'st';
    } else if (absNum % 100 !== 12 && absNum % 10 === 2) {
        suffix = 'nd';
    } else if (absNum % 100 !== 13 && absNum % 10 === 3) {
        suffix = 'rd';
    }

    return num + suffix;
}

// Test Data
console.log(humanize_format());      //  Output: ""
console.log(humanize_format(1));     //  Output: "1st"
console.log(humanize_format(8));     //  Output: "8th"
console.log(humanize_format(301));   //  Output: "301st"
console.log(humanize_format(402));   //  Output: "402nd"
