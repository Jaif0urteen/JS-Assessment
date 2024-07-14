function getMeridiem() {
    return {
        AM: 'ANTE MERIDIEM',
        PM: 'POST MERIDIEM'
    };
}

// Test case
console.log(getMeridiem().AM); // "ANTE MERIDIEM"
console.log(getMeridiem().PM); // "POST MERIDIEM"
