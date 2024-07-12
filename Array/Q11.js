function computeSumAndProduct(array) {
    let sum = 0;
    let product = 1; 

    for (let i = 0; i < array.length; i++) {
        sum += array[i];       
        product *= array[i];   
    }

    return { sum, product }; 
}

// Test Data
var integers = [1, 2, 3, 4, 5];
const result = computeSumAndProduct(integers);

console.log(`Sum: ${result.sum}`);         // Output: Sum: 15
console.log(`Product: ${result.product}`); // Output: Product: 120
