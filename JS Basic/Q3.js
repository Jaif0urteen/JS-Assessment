function getCurrentDate(){
   
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getUTCFullYear()

    let dayFormated = currentDay < 10 ? '0' + currentDay : currentDay
    console.log(currentDay);


    
    console.log(`dd/mm/yyyy :  ${dayFormated}/${currentMonth}/${currentYear}`);
    console.log(`dd-mm-yyyy :  ${dayFormated}-${currentMonth}-${currentYear}`);
}

getCurrentDate()