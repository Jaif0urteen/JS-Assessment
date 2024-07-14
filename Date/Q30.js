function getMeridiem() {
    return {
        am: 'ante meridiem',
        pm: 'post meridiem'
    };
}

// Test case
console.log(getMeridiem().am); // "ante meridiem"
console.log(getMeridiem().pm); // "post meridiem"
