function curday(separator) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    let yyyy = today.getFullYear();

    // Add leading zeroes if necessary
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    }

    // Return the formatted date
    return mm + separator + dd + separator + yyyy;
}

// Test cases
console.log(curday('/')); // "11/13/2014"
console.log(curday('-')); // "11-13-2014"
