function longestCommonStartingSubstring(strings) {
    if (strings.length === 0) return ""; 

    let commonSubstring = strings[0];

    for (let i = 1; i < strings.length; i++) {
        let currentString = strings[i];
        let j = 0;

        
        while (j < commonSubstring.length && j < currentString.length && commonSubstring[j] === currentString[j]) {
            j++;
        }

   
        commonSubstring = commonSubstring.substring(0, j);

       
        if (commonSubstring === "") break;
    }

    return commonSubstring; 
}

// Sample array
console.log(longestCommonStartingSubstring(['go', 'google'])); // Output: "go"
