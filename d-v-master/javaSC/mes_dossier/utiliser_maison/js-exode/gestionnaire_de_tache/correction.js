'use strict'
let todoAdd = document.getElementById("doto-add")
const status = document.getElementById("status")
const todolist =
    todoAdd.addEventListener("keydown", addTodo);
const todos = [];

function addTodo(e) {
    if (e.key === "Enter") {

        console.log("ajout de la tache...");
        const todo = todoAdd.value;
        todos.push(todo);


        insertTodos();

        todoAdd.value = "";
    }
    updateStatus();
}

function updateStatus() {
if(todos.length > 0){
    statusParagraph.style.display = "none";
} else {
    statusParagraph.style.display = "block";

}
}

function insertTodos() {

    //création d'une balise <li></li>
    const liElement = document.createElement("li");
    //ajout de la classe "todo" (<li class="todo"></li>)
    liElement.classList.add("todo")
    const task = todos[todos.length - 1];
    liElement.innerHTML = task;
    todolist.append(liElement);

}
