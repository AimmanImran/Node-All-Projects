import inquirer from 'inquirer'

function counter(paragraph:string){
    let freewhiteSpace = paragraph.replace(/\s/g,"")

    return freewhiteSpace.length
}

async function startwordcount(counter:(text:string)=>number){
 do{ 
    let res = await inquirer.prompt({
    type:"input",
    message:"Write a paragraph here...",
    name:"paragraph"
  })
    console.log(counter(res.paragraph))
} 
while(true)

}
startwordcount(counter)