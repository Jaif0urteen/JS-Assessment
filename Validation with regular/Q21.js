function thousands_separators(num) {
    return num.toLocaleString('en-US');
}

// Test Data
console.log(thousands_separators(1000));        // "1,000"
console.log(thousands_separators(10000.23));    // "10,000.23"
console.log(thousands_separators(100000));      // "100,000"
