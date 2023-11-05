import inquirer from 'inquirer';
//todos array
//functions
//operations
let todos = ["sufyan", "radical"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "Select",
            choices: ["add", "update", "view", "delete", "exit"],
        });
        if (ans.Select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add Item to update your list:",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.Select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select Item for update:/n",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add Item in the list",
                name: "todo",
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.Select == "view") {
            console.log(todos);
        }
        if (ans.Select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select Item for delete:/n",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (ans.select == "exit") {
            console.log("Thanks for using");
        }
    } while (true);
}
createTodo(todos);
