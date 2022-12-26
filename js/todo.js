const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = []; // todo를 저장할 배열

function saveToDos(){
  //todo를 브라우저에 저장하기 위해 localStorage 사용.
  //대신 localStorage는 배열을 저장할 수 없기 때문에 배열처럼 보이도록 변환해줌
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
  const li = e.target.parentElement;
  li.remove();
  // console.log(li.id);
  // console.log(typeof li.id); //number
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj){
  const listItem = document.createElement("li");
  listItem.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(listItem).append(span, button);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos(); // 등록된 todos는 나중에도 사용할 수 있도록 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} // 이전에 등록한 todos가 있다면 가져와서 돔 그려주기