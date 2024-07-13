function getSubsets(str) {
    const subsets = [];
    const length = str.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j <= length; j++) {
            subsets.push(str.substring(i, j));
        }
    }

    return subsets;
}

// Sample Data
const data = "dog";
const result = getSubsets(data);
console.log(result); // Expected Output: ["d", "do", "dog", "o", "og", "g"]
