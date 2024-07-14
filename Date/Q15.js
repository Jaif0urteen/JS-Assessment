function quarter_of_the_year(date) {
    // Get the month (0-11) from the Date object
    let month = date.getMonth();

    // Calculate the quarter based on the month
    if (month >= 0 && month <= 2) {
        return 1; // Quarter 1: January to March
    } else if (month >= 3 && month <= 5) {
        return 2; // Quarter 2: April to June
    } else if (month >= 6 && month <= 8) {
        return 3; // Quarter 3: July to September
    } else {
        return 4; // Quarter 4: October to December
    }
}

// Test case
console.log(quarter_of_the_year(new Date(2015, 1, 21))); // 2
