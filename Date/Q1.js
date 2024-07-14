function is_date(input) {
    return input instanceof Date && !isNaN(input);
}

// Test cases
console.log(is_date("October 13, 2014 11:13:00")); // false
console.log(is_date(new Date(86400000))); // true
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0))); // true
console.log(is_date([1, 2, 4, 0])); // false
