function insertDashes(num) {
   
    let str = num.toString();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
       
        if (i < str.length - 1 && str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
            result += '-';
        }
    }

    return result;
}

let num = 254680
console.log(insertDashes(num)); 
