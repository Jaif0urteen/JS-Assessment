function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false; // Initialize swapped to false
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // Swap if elements are in the wrong order
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Set swapped to true
            }
        }
        n--; // Reduce n because the last element is already sorted
    } while (swapped); // Repeat until no swaps occur

    return arr;
}

// Sample Data
const data = [6, 4, 0, 3, -2, 1];
const sortedData = bubbleSort(data);
console.log(sortedData); // Expected Output: [-2, 0, 1, 3, 4, 6]
