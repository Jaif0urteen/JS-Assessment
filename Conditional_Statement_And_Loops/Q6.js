let students = [
    {name:"David" , marks:80},
    {name:"Vinoth" , marks:77},
    {name:"Divya" , marks:88},
    {name:"Ishitha" , marks:95},
    {name:"Thomas" , marks:68},
]

function averageMarks(students) {
    let totalMarks = 0

    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks
    }

    let averageMarks = totalMarks / students.length
    return averageMarks
}

function determineGrade(averageMarks) {
    if (averageMarks >= 90) {
        return 'A'
    }else if(averageMarks >= 80) {
        return 'B'
    }else if(averageMarks >=70) {
        return 'C'
    }else if(averageMarks >= 60) {
        return 'D'
    }else {
        return 'E'
    }
}

let averageMarksData = averageMarks(students)
let grade = determineGrade(averageMarksData)
console.log(grade);