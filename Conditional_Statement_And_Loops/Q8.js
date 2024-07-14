function isArmstrongNumber(num) {
    let digits = num.toString().split('')
    let sumOfCubes = 0

    for(let digit of digits){
        sumOfCubes += Math.pow(parseInt(digit) , 3)
    }

    return sumOfCubes === num
}

console.log(isArmstrongNumber(371));