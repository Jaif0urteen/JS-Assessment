function abbrev_name(str) {
    const parts = str.split(' ');
    const firstName = parts[0];
    const lastInitial = parts[1] ? parts[1][0] + '.' : '';
    return `${firstName} ${lastInitial}`;
}

// Test Data
console.log(abbrev_name("Robin Singh")); // Output: "Robin S."
