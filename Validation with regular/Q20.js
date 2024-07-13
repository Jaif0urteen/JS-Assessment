function isAlphaDashUnderscore(str) {
    // Regular expression to match only alphabets, dashes, and underscores
    const pattern = /^[a-zA-Z-_]+$/;
    return pattern.test(str);
}

// Test Data
console.log(isAlphaDashUnderscore('Hello-World'));        // true
console.log(isAlphaDashUnderscore('Hello_World'));        // true
console.log(isAlphaDashUnderscore('Hello-World_2023'));   // false
console.log(isAlphaDashUnderscore('Hello@World'));        // false
console.log(isAlphaDashUnderscore(''));                    // false
console.log(isAlphaDashUnderscore('Alpha_Beta-Gamma'));   // true
