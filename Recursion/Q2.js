const gcd = (a,b) => {
    if (b===0) {
        return a
    }
    return gcd(b , a % b)
}
let num1 = 56
let num2 = 98
console.log(gcd(num1 , num2));