function difference(arr1, arr2) {
    
    const flattenArray = (arr) => {
        return arr.reduce((acc, val) => {
            return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
        }, []);
    };

    
    const combined = flattenArray(arr1).concat(flattenArray(arr2));

    
    const uniqueElements = Array.from(new Set(combined));

    return uniqueElements;
}

// Test Data
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
//  Output: ["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); 
//  Output: ["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
//  Output: ["1", "2", "3", "10", "100"]
