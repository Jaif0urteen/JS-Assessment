// Function to calculate lifetime supply
function calculateSupply(age, amountPerDay) {
    // Constants
    const maxAge = 90; // Maximum age
    const daysInYear = 365.25; // Average days in a year, accounting for leap years

    // Calculate total amount needed
    let yearsRemaining = maxAge - age;
    let amountNeeded = Math.round(amountPerDay * daysInYear * yearsRemaining);

    console.log(`You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}`);
}

// Call the function with different sets of values
calculateSupply(30, 2.5); // Example 1: Current age 30, consuming 2.5 units per day
calculateSupply(25, 3.2); // Example 2: Current age 25, consuming 3.2 units per day
calculateSupply(40, 1.8); // Example 3: Current age 40, consuming 1.8 units per day
