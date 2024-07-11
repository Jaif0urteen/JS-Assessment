const countOccur = (str , letter) => {
    let lowerCaseStr = str.toLowerCase()
    let lowerCaseLetter = letter.toLowerCase()
    let count = 0
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr.charAt(i) === lowerCaseLetter) {
            count++
        }
    }
    return count
}

let str = "Welcome to this Program and Check it this function is properly working or not"
let letter = "o"
console.log(countOccur(str, letter));