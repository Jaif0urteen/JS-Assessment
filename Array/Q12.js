function removeDuplicates(arr) {
    let lowerCaseArr = arr.map(item => typeof item === 'string' ? item.toLowerCase() : item);
    let uniqueSet = new Set(lowerCaseArr);
    return Array.from(uniqueSet);
}

// Test Data
var arr = ['A', 'b', 'A', 'a', 'B', 'c', 'C', 1, 2, 2, 3];
var result = removeDuplicates(arr);

console.log(result); // Output: ['a', 'b', 'c', 1, 2, 3]
