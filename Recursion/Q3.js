const range = (x,y) => {
    let result = []
    for (let i = x+1; i < y; i++) {
result.push(i)
        
    }
    return result
}
console.log(range(2,9));