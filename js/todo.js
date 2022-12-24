const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(e){
  // console.log("click!");
  // console.log(e.target);
  // console.log(e.target.parentElement);
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(listItem).append(span, button);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);