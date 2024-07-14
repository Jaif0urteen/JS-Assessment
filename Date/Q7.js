function is_weekend(dateString) {
    let date = new Date(dateString);
    let dayOfWeek = date.getDay();

    // Check if dayOfWeek is Saturday (6) or Sunday (0)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        return "weekend";
    } else {
        // Not a weekend day
        return undefined;
    }
}

// Test cases
console.log(is_weekend('Nov 15, 2014')); // "weekend" (Saturday)
console.log(is_weekend('Nov 16, 2014')); // "weekend" (Sunday)
console.log(is_weekend('Nov 17, 2014')); // undefined (Monday)
