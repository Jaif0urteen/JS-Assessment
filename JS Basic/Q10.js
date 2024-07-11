function celsiusToFahrenheit (celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit
}
function fahrenheiteToClsiusTo (fahrenheite) {
    let celsius = (fahrenheite - 32) * 5 / 9
    return celsius
}

let celsius = 60
let fahrenheit = celsiusToFahrenheit(celsius)

 fahrenheit = 40
 celsius = fahrenheiteToClsiusTo(fahrenheit)
 console.log(`${celsius.toFixed(2)}*c is ${fahrenheit}`);
 console.log(`${fahrenheit}*f is ${celsius}`);