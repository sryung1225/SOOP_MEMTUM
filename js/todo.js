const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo){
  //console.log("I will paint ", newToDo);
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  toDoList.appendChild(listItem).appendChild(span);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);