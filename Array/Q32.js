function remove_array_element(arr, element) {
    return arr.filter(item => item !== element);
}

// Test data
console.log(remove_array_element([2, 5, 9, 6], 5)); //Output: [2, 9, 6]
