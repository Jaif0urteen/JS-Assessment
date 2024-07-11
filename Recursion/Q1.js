const factorialRecusive = (n) => {
    if (n < 0)  {
        return -1
    }
    if (n===0 || n===1) {
        return 1
    }
    return n * factorialRecusive(n-1)
}

let num = 5
console.log(factorialRecusive(num));