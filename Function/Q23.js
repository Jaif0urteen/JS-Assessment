const longestSubStringWithoutRepeating = (s) => {
let start = 0
let maxLength = 0
let charIndexMap = {}

for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    
    if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
        start = charIndexMap[currentChar] + 1
    }

    charIndexMap[currentChar] = end
    maxLength = Math.max(maxLength, end - start + 1)
}

let longestSubString = s.substring(start , start+maxLength)
return longestSubString
}

let inputString = "abcabcdd"
console.log(longestSubStringWithoutRepeating(inputString));