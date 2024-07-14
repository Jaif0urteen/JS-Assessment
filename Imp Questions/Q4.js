function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`);
}

// Call the function with different values
tellFortune(2, "Alice", "New York", "software developer");
tellFortune(3, "Bob", "Los Angeles", "teacher");
tellFortune(0, "Catherine", "London", "entrepreneur");
