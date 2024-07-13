function binary_Search(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }

    return -1; // Target not found
}

// Sample array
var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Expected Output
console.log(binary_Search(items, 1)); // 0
console.log(binary_Search(items, 5)); // 4
console.log(binary_Search(items, 6)); // -1 (target not found)
console.log(binary_Search(items, 9)); // 7
