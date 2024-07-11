const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j+1]) {
            let temp = arr[j]
            arr[j]  = arr[j+1]
            arr[j+1] = temp
        }
       }
        
    }
    return arr
}

let arr = [122,5,1222,333,564,34,78,100,76543]
console.log(bubbleSort(arr));