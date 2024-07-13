function difference(arr1, arr2) {
   
    function flattenDeep(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }

    
    let flatArr1 = flattenDeep(arr1);
    let flatArr2 = flattenDeep(arr2);

   
    let diffArr1 = flatArr1.filter(x => !flatArr2.includes(x));
    
    let diffArr2 = flatArr2.filter(x => !flatArr1.includes(x));

   
    return [...new Set([...diffArr1, ...diffArr2])];
}

// Test Data
console.log(difference([1, 2, 3], [100, 2, 1, 10])); //  Output: ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); //  Output: ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); //  Output: ["3", "10", "100"]
