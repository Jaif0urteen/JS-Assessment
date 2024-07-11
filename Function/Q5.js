function capitalFirstLetterOfEachWord (str) {
let updatedLetter = str.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
console.log(updatedLetter);
}

let str = 'i am service now devloper.'
capitalFirstLetterOfEachWord(str)