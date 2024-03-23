#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 10 + 1);
console.log(randomNumber)

const answer= await inquirer.prompt([{
    name : "uerGuSsEdNumber",
    type : "number",
    message: "please guess number a between 1 to 10",
}]);
if(answer.uerGuSsEdNumber === randomNumber){
    console.log("congrats! you a guessing right number.");
}else{
    console.log("your are wrong guessing number")
}