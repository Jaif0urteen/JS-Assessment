function array_Clone(arr) {
    return arr.slice();
}


console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]])); 

function array_Clone(arr) {
    return [...arr];
}

// Test Data
console.log(array_Clone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]])); // [1, 2, [4, 0]]
