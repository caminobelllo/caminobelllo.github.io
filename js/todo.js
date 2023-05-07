const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDoArr = [];
const TODO_KEY = "todo";

function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoArr));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArr = toDoArr.filter((element) => element.id !== parseInt(li.id));
  saveToDo();
}

function printToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.id = newTodo.id;
  span.innerText = "🔥" + newTodo.text;

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDoArr.push(newTodoObj);
  printToDo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveCompleted = localStorage.getItem(TODO_KEY);

if (saveCompleted) {
  const parsedToDo = JSON.parse(saveCompleted);
  toDoArr = parsedToDo;
  parsedToDo.forEach(printToDo);
}
