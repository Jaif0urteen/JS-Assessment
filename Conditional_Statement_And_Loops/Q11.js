function gcb(a,b){
    while(b !== 0){
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

let a = 56
let b = 98
console.log(gcb(a,b));