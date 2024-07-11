function dayNextChristmas () {
    const today = new Date()
    const currYear = today.getFullYear()

    let christmas = new Date(currYear , 11 , 25)
    // console.log(christmas);

    if (today > christmas) {
        christmas = new Date(currYear + 1 ,11 ,25)
    }

    const diffInMillisecond = christmas-today

    const diffInDays = Math.ceil(diffInMillisecond / (1000 * 60 * 60 * 24))

    return diffInDays
}

console.log(dayNextChristmas());