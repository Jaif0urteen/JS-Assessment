let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"];

function getOrdinalSuffix(n) {
    let suffix = o[(n % 10) > 3 ? 0 : (n % 100 - n % 10 != 10) * n % 10];
    return n + suffix;
}

function displayColorChoices(colors) {
    for (let i = 0; i < colors.length; i++) {
        let choiceNum = i + 1;
        console.log(`${getOrdinalSuffix(choiceNum)} choice is ${colors[i]}.`);
    }
}


displayColorChoices(color);
