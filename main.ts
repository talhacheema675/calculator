#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { input,choic } from "./inq.js";
import { funct } from "./operation.js";
console.log(chalk.red.bold(figlet.textSync("Calculator")));
let count=0;
for(let i=0;i>=0;i++)
{
let num1=await input(chalk.red("\n\tenter 1st number: "));
let num2=await input(chalk.red("\n\tenter 2nd number: "));
let nm =await choic();
funct(nm,num1,num2);
let num3=await input (chalk.red("\n\tenter 0 to exit or any other number to perform another calculation"))
if(num3==0)
{
    break;
}
}
