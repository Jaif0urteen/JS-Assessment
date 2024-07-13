function union(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
}

// Sample Data
console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Expected Output: [1, 2, 3, 10, 100]
