function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true
    } else {
        return false
    }
}


const year = 2024
if (isLeapYear(year)) {
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not a leap year`);
}