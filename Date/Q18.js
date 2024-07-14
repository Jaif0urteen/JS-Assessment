function calculate_age(birthdate) {
    // Get the current date
    let current_date = new Date();

    // Calculate the difference in years
    let age = current_date.getFullYear() - birthdate.getFullYear();

    // Adjust the age based on the month and day of birthdate
    // If the current date is before the birthdate in the current year, subtract 1 from age
    if (current_date.getMonth() < birthdate.getMonth() ||
        (current_date.getMonth() === birthdate.getMonth() && current_date.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}

// Test cases
console.log(calculate_age(new Date(1982, 11, 4))); // 32
console.log(calculate_age(new Date(1962, 1, 1))); // 53
    