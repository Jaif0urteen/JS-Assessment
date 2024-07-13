function findDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (elementCount[item]) {
            elementCount[item]++;
        } else {
            elementCount[item] = 1;
        }
    }

    // Find elements with more than one occurrence
    for (let item in elementCount) {
        if (elementCount[item] > 1) {
            duplicates.push(item);
        }
    }

    return duplicates;
}

// Test Data
var array = [1, 2, 3, 4, 5, 6, 3, 2, 1, 7, 8, 8, 9];

// Expected Output
console.log(findDuplicates(array)); // Output: [ '1', '2', '3', '8' ]
