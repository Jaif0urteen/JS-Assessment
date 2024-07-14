const displayLargerNumber = (num1 , num2 , num3) => {
    let shortNumbers ;
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >=num3) {
            shortNumbers = [num1 , num2 , num3]
        }else{
            shortNumbers = [num1 , num3 , num2]
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >=num3) {
            shortNumbers = [num2 , num1 , num3]
        }else{
            shortNumbers = [num2 , num3 , num1]
        }
    } else {
        if (num1 >= num2) {
            shortNumbers = [num3 , num1 , num2]
        }else {
            shortNumbers = [num3 , num2 , num1]
        }
    }

    return shortNumbers
    }
    
    let num1 = 0 , num2 = -3 , num3 = 7
    console.log(displayLargerNumber(num1 , num2, num3));