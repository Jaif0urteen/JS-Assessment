function reverseNumber(x) {
    let num = String(x)
    let reverseNum  = num.split('').reverse().join('')
    let chngNumber = Number(reverseNum)
    console.log(chngNumber);
}

let x = 32243
reverseNumber(x)