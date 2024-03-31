#! /usr/bin/env node;
import inquirer from "inquirer"
console.log(`Note: This is Just for testing Login Setup`);
console.log(`Email: abc@gmail.com and Password: 1234`);
console.log(`and also try with wrong Email or Password`);
let email : string = "abc@gmail.com";
let password : number = 1234;
let clientInput = await inquirer.prompt([
    {
        name:"inputEmail",
        message: "Enter Your Email: ",
        type: "string",
    },
    {
        name:"inputPassword",
        message:"Enter Your Pasword: ",
        type:"number",
    },
]);
if(email === clientInput.inputEmail && password === clientInput.inputPassword) {
    console.log("Welcome");
    console.log("You are Successfully Login");
} else if(email === clientInput.inputEmail && password != clientInput.inputPassword) {
    console.log(`Your Password is incorrect. Please enter correct Password.`);
} else{
    console.log(`Invalid Eamil or Password`);
};
