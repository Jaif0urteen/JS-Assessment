function sumArrays(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        let val1 = i < arr1.length ? arr1[i] : 0;
        let val2 = i < arr2.length ? arr2[i] : 0;
        result.push(val1 + val2);
    }

    return result;
}

// Sample arrays
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];

// Expected Output
console.log(sumArrays(array1, array2)); // [4, 5, 8, 10, 12, 13]
    