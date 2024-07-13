function getRandomItem(arr) {
    if (arr.length === 0) return undefined; 
    const randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex]; 
}

// Test data
const sampleArray = [1, 2, 3, 4, 5];
console.log(getRandomItem(sampleArray)); // Output: Random item from the array
