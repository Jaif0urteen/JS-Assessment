function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

// Test data
const array = [1, 2, 3, 4, 5, 3];
const elementToRemove = 3;

const newArray = removeElement(array, elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
