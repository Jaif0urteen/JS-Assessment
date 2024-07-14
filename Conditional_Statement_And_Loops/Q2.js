const displayLargerNumber = (num1 , num2 , num3) => {
    let product = num1 * num2 * num3
    if (product > 0) {
        return "the sign is +"
    } else if(product < 0) {
        return "the sign is -"
    }else {
        return "the product is zero which have not sign"
    }
    }
    
    let num1 = 10 , num2 = 20 , num3 = -7
    console.log(displayLargerNumber(num1 , num2, num3));