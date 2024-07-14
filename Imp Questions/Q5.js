// Function to calculate age
function calculateAge(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1; // if birthday hasn't occurred yet this year

    console.log(`You are either ${age1} or ${age2}`);
}

// Get the current year dynamically
let currentYear = new Date().getFullYear();

// Call the function with different sets of values
calculateAge(1985, currentYear); // Example 1
calculateAge(1990, currentYear); // Example 2
calculateAge(2000, currentYear); // Example 3
