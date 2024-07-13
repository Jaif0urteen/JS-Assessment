function move(arr, fromIndex, toIndex) {
   
    if (fromIndex < 0) fromIndex += arr.length;
    if (toIndex < 0) toIndex += arr.length;

    
    const [element] = arr.splice(fromIndex, 1);
    
    
    arr.splice(toIndex, 0, element);

    return arr; 
}

// Test Data
console.log(move([10, 20, 30, 40, 50], 0, 2)); //  Output: [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); //  Output: [10, 20, 30, 50, 40]
