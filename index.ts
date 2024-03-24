#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumder" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perfoam action",
    type: "list", 
    name: "operator", 
    choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);

// conditional Statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumder + answer.secondNumber)
}
else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumder - answer.secondNumber)
}
else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumder * answer.secondNumber)
}
else if (answer.operator === "Division") {
  console.log(answer.firstNumder / answer.secondNumber)
}
else{
  console.log("Please select valid operator")
}

console.log("THE END");


