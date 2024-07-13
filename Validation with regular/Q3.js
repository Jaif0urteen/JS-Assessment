function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    return emailPattern.test(email);
}

// Test Data
console.log(isValidEmail('example.email+test@gmail.com')); // true
console.log(isValidEmail('invalid..email@gmail.com'));     // false
console.log(isValidEmail('.invalidemail@gmail.com'));      // false
console.log(isValidEmail('invalidemail@gmail.com.'));      // false
console.log(isValidEmail('valid_email@example.com'));       // true
