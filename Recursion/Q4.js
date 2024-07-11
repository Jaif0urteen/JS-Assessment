const sumArray = (array) => {
    return array.reduce((acc , curr) => acc + curr , 0)
}
let arr = [1,2,3,4,5]
console.log(sumArray(arr));