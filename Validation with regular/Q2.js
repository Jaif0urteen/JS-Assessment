function isValidCreditCardNumber(cardNumber) {
    // Remove non-digit characters
    const sanitizedNumber = cardNumber.replace(/\D/g, '');

    // Check if the string is empty or has invalid length
    if (!sanitizedNumber || sanitizedNumber.length < 13 || sanitizedNumber.length > 19) {
        return false;
    }

    // Luhn algorithm
    let sum = 0;
    let shouldDouble = false;

    // Process the digits from right to left
    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedNumber[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; // Equivalent to subtracting 10 and adding 1
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble; // Toggle the shouldDouble flag
    }

    return sum % 10 === 0; // Valid if the total sum is a multiple of 10
}

// Test Data
console.log(isValidCreditCardNumber('4539 1488 0343 6467')); //  Output: true
console.log(isValidCreditCardNumber('6011-1111-1111-1117')); //  Output: true
console.log(isValidCreditCardNumber('3782 8224 6310 005')); //  Output: true
console.log(isValidCreditCardNumber('1234 5678 9012 3456')); //  Output: false
