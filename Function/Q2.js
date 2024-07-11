function isPalindrome(str) {
    const cleanStr = str.replace(`/[^a-zA-Z0-9] `, '')
    
    let reverseStr = cleanStr.split('').reverse().join('')
    console.log(reverseStr);

    if (cleanStr === reverseStr) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}

let str = 'madam run'

isPalindrome(str)