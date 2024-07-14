function max_date(dateArray) {
    // Convert date strings to Date objects
    let dates = dateArray.map(dateString => new Date(dateString));

    // Find the maximum date (latest date)
    let maxDate = new Date(Math.max.apply(null, dates));

    // Format the maximum date back to the original format (yyyy/mm/dd)
    let yyyy = maxDate.getFullYear();
    let mm = String(maxDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    let dd = String(maxDate.getDate()).padStart(2, '0');

    return `${yyyy}/${mm}/${dd}`;
}

// Test case
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "2015/02/02"
