cosnt = isPrime = (number) => {
    if (number <= 1) {
        return false
    }
    if (number % 2 === 0) {
        return false
    } else {
        return true
    }
} 
let number = 7
console.log(isPrime(number));