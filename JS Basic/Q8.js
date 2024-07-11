const prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber);

const userGuessNumber = prompt("enter a number: ")

if (userGuessNumber === randomNumber) {
    console.log('Good Work');
} else {
    console.log(`Not Correct Answer , the number is ${randomNumber}`);
}