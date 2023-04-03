import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
let input= async(str:string) =>
{
    let inpt= await inquirer.prompt([{
        name:"num",
        type:"number",
        message:str
    }])
    return inpt.num;
    
}

let choic=async()=>
{
    let opr= await inquirer.prompt([{
        name:"operation",
        type:"rawlist",
        message:"select the desired operation: ",
        choices:["add","subtraction","multiply","divide","mod",]
    }])
    return opr.operation;
}
export {input,choic};
