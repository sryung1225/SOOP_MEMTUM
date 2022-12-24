const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = []; // todo를 저장할 배열

function saveToDos(){
  //todo를 브라우저에 저장하기 위해 localStorage 사용.
  //대신 localStorage는 배열을 저장할 수 없기 때문에 배열처럼 보이도록 변환해줌
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(e){
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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);