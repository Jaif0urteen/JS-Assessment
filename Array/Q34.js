function nthLargest(arr, n) {
    
    const sortedArray = arr.sort((a, b) => b - a);
    
   
    return sortedArray[n - 1];
}

// Test Data
console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); //  Output: 89
