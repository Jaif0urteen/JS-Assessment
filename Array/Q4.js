function last(array, n) {
    if (n == null) {
        return array[array.length - 1];
    } else if (n <= 0) {
        return [];
    } else {
        return array.slice(-n);
    }
}

// Test Data
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2], 3)); 
console.log(last([7, 9, 0, -2], 6)); 
