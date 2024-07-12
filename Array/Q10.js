function sumOfSquares(vector) {
    let sum = 0;
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i] ** 2; 
    }
    return sum;
}

// Test Data
var vector = [1, 2, 3, 4, 5];
console.log(sumOfSquares(vector)); // Output: 55
