function subMultiplesOf3and5(limit) {
    let sum = 0
    for (let i = 0; i < limit; i++) {
       if(i % 3 === 0 || i % 5 === 0){
        sum += 1
       }
        
    }
    return sum
}

console.log(subMultiplesOf3and5(1000));