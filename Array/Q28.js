function merge_array(array1, array2) {
    
    const mergedArray = [...array1, ...array2];
    const uniqueArray = [...new Set(mergedArray)];
    
    return uniqueArray;
}

// Test data
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2)); // Output: [1, 2, 3, 30]
