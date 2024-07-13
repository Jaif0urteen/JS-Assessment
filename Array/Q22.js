function removeFalsyValues(arr) {
    return arr.filter(value => {
        return value !== null && 
               value !== 0 && 
               value !== "" && 
               value !== false && 
               value !== undefined && 
               !Number.isNaN(value);
    });
}

// Sample array
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(removeFalsyValues(sampleArray)); // Output: [15, -22, 47]

