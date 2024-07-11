const elemenntLargerThan = (array , number) => {
return array.filter((element)=>element > number)
}
let array = [20,5,10,6,15,3]
let number = 10
console.log(elemenntLargerThan(array , number));