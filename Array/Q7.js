// Sample array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function mostFrequentItem(arr) {
    var frequency = {};
    var maxCount = 0;
    var mostFrequent;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (frequency[item] == null) {
            frequency[item] = 1;
        } else {
            frequency[item]++;
        }

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }

    return `${mostFrequent} ( ${maxCount} times )`;
}

// Output
console.log(mostFrequentItem(arr1)); 
