function findTheSundayYears(startYear , endYear){
    let sundayYears = []
    for (let year = startYear; year <= endYear; year++) {
        let date = new Date(year , 0 , 1)
        if (date.getDate() == 0) {
            sundayYears.push(year)
        }
        
    }
    return sundayYears
}

const startYear = 2024
const endYear = 2050

const sundayYears = findTheSundayYears(startYear , endYear)
console.log(`Years where January 1st is a Sunday b/w ${startYear} and ${endYear}`)
console.log(sundayYears.join(','));