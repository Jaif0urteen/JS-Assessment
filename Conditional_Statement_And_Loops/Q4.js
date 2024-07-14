const findLargestOfFive = (n1,n2,n3,n4,n5) => {
    let Largest = n1
    if (n2 > Largest) {
        Largest = n2
    }
    if (n3 > Largest) {
        Largest = n3
    }
    if (n4 > Largest) {
        Largest = n4
    }
    if (n5 > Largest) {
        Largest = n5
    }
    
    return Largest
}
let n1 = 5 , n2 = -3 , n3=8 , n4 = 10 , n5 = 11
console.log(findLargestOfFive(n1,n2,n3,n4,n5));