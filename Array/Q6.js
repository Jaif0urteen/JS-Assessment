// Sample array
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];


function sortArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

// Sorted array
var sortedArray = sortArray(arr1);
console.log(sortedArray); 
