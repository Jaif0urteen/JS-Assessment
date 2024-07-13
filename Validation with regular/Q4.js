function findDatesInString(inputString) {
    // Regular expression to match dates in the formats: MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD
    const datePattern = /\b(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}|\d{4}[-]\d{1,2}[-]\d{1,2})\b/g;
    return inputString.match(datePattern) || [];
}

// Test Data
const testString = "Important dates are 12/25/2021, 01-15-2022, and the meeting on 2022-01-01.";
const foundDates = findDatesInString(testString);

console.log(foundDates); // Output: ["12/25/2021", "01-15-2022", "2022-01-01"]
