import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
let funct=(nm3:string,nm1:number,nm2:number)=>
{

    if(nm3=="add")
{
    console.log(chalk.blue(`your required answer : ${nm1+nm2}`));
    
}
else if(nm3=="subtraction")
{
    console.log(chalk.blue(`your required answer : ${nm1-nm2}`));
    
}

else if(nm3=="divide")
{
    console.log(chalk.blue(`your required answer : ${nm1/nm2}`));
    
}
else if(nm3=="multiply")
{
    console.log(chalk.blue(`your required answer : ${nm1*nm2}`));    
    
}
else if(nm3=="mod")
{
    console.log(chalk.blue(`your required answer : ${nm1%nm2}`));
    
}
else{
    console.log(chalk.red("you have selected the wrong input. please select from above list"));
}

}
export {funct};

