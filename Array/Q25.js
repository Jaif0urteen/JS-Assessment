function retrieveNumericValues(arr) {
    return arr.filter(value => 
        typeof value === 'number' && 
        !isNaN(value) && 
        value !== 0
    );
}

// Sample array
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];


const result = retrieveNumericValues(sampleArray);
console.log(result); // Output: [15, -22, 47]
