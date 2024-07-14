function getInternetTime(date) {
    // Calculate total seconds passed since midnight
    let totalSeconds = (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + date.getUTCSeconds();
    
    // Calculate Internet time in beats
    let beats = Math.floor((totalSeconds / 86.4) % 1000);

    // Format beats with leading zeros if necessary
    let formattedBeats = ("000" + beats).slice(-3);

    return formattedBeats;
}

// Test Data: Current UTC date
let now = new Date();
console.log(getInternetTime(now));  // Example output: "123"
