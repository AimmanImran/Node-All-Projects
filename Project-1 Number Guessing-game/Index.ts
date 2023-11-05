#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import { promises } from "dns";


const sleep = () => new Promise((res,rej) => setTimeout(res,2000));

async function welcom(){
    const rainbowTitle = chalkAnimation.rainbow("\n\t Lets git Start the gusssing game  Developed By Sufyan\t"); //start
await sleep();
rainbowTitle.stop();
}

welcom()
let playerLife = 1;
async function askQuestion(){
    var randomNumber:number = Math.floor(Math.random() * 50 + 1);
   
    do{
  playerLife--;
  console.log(chalk.bgBlueBright`player Life game is Start ${playerLife}`);
    var que = await inquirer.prompt([
        {
            type: "number",
            name: "user_num",
            message: chalk.yellow ("Select for Any Number Between 1-50:"),
        
        }
    ]);
    console.log(que);

    if(que.Life === randomNumber){
        console.log(chalk.yellow(`Congragulation !! Tou Guess the Number`));
    }else if(que.Life < randomNumber){
      console.log(chalk.blue(`Your number  ${que.Life} is Less Then guess Number` ));
    }else if(que.Life > randomNumber){
        console.log(chalk.green(`Your number  ${que.Life} is Lower Then guess Number` ));
      }else if(que.Life > randomNumber){
        console.log(chalk.blueBright(`Your number  ${que.Life} is Higher Then guess Number` ));
    }
   
    }while(playerLife > 0 && randomNumber !== que.user_num);
  if(playerLife == 0 && randomNumber !== que.user_num  ){
    console.log(chalk.bgGreen(`Game is Over Taking Rest`));

  }


}
 async function startAgain(){
 do{
  console.clear();
  await welcom();
  playerLife = 3;
  await askQuestion();

 
  var restart = await inquirer.prompt([

    {
      type: "input",
      name: "start_again",
      message: chalk.rgb(300,200,123) ("DO you want to Restart the GAME ? Pres Yes or NO:")
    }

  ])
}while  (restart.start_again == 'y' || restart.start_again === 'Y' || restart.start_again === 'yes'|| restart 
)

}
startAgain()