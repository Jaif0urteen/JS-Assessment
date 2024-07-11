const longestCountryName = (countryName) => {
    let longestName = ""
    for (let i = 0; i < countryName.length; i++) {
        if (countryName[i].length > longestName.length) {
            longestName = countryName[i]
        }
    }
    return longestName
}

let countryName = ["Australia" , "Germany" , "United States of America"]
console.log(longestCountryName(countryName));
