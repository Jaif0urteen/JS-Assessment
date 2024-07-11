function findLongestWord(str) {
    const words = str.split(" ")

    let longestWord = ''
    for (let word of words)
        if (word.length > longestWord.length) {
            longestWord = word
        }
        return longestWord;
}

let str = "Testing the Longest word in this sentence"
console.log(findLongestWord(str));