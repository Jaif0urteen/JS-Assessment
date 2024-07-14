function unix_timestamp_to_time(timestamp) {
    // Convert Unix timestamp to milliseconds
    let unixTime = timestamp * 1000;

    // Create a new Date object
    let date = new Date(unixTime);

    // Extract hours, minutes, and seconds
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    // Format time as hh:mm:ss
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

// Test case with Unix timestamp (seconds since Jan 1, 1970)
console.log(unix_timestamp_to_time(1613587200)); // 1613587200 is Feb 18, 2021 00:00:00 UTC
