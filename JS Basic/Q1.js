function diplayDateTime(){
    const weekName = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ]

    let currentDate = new Date()
    let day = weekName[currentDate.getDay()]
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let second = currentDate.getSeconds()

    let appm = hour >= 12 ? "PM" : "AM"

    console.log(`Today is :  ${day}`);
    console.log(`Current Time is :  ${hour} ${appm} : ${minute} : ${second}`);
}

diplayDateTime()