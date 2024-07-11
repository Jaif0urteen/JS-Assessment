const binarySearch = (sortedArray , target) => {
    let left = 0
    let right = sortedArray.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (sortedArray[middle] === target) {
            return middle
        } else if (sortedArray[middle] < target){
            left = middle + 1
        }else {
            right = middle - 1 
        }
    }
    return -1
}

let sortedArray = [1,3,5,7,9,11,13,15,17,19]
let target = 11
console.log(binarySearch(sortedArray , target));