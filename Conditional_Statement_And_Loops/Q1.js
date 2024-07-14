const displayLargerNumber = (num1 , num2) => {
if (num1 > num2) {
    return "Number 1 is Larger then number 2"
} else if(num2 > num1) {
    return "Number 2 is Larger then number 1"
}else {
    return "Both Number are Equal"
}
}

let num1 = 10 , num2 = 20 
console.log(displayLargerNumber(num1 , num2));