const countLetterOccur = (str) => {
    let letterCounts = {}
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()

        if (/[a-z]/.test(lowerCaseChar)) {
            if (letterCounts[lowerCaseChar]) {
                letterCounts[lowerCaseChar]++
            } else {
                letterCounts[lowerCaseChar] = 1
            }
        }
    }
    return letterCounts
}
let str = "Hello World"
console.log(countLetterOccur(str));