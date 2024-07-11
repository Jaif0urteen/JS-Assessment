const sortArray  = (arr) => {
let newSortArray =[...new Set(arr)].sort((a,b) => a-b)
let secondLowest = newSortArray[1]
let secondLargest = newSortArray[newSortArray.length - 1]
return [secondLargest , secondLowest]
}
let arr = [5,5,4,2,4,1,3]
console.log(sortArray(arr));