const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(e){
  e.preventDefault();
  //console.log(toDoInput.value);
  // 새 변수에 value값 저장하고 input에 입력된 건 육안에서 지우기
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  console.log(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);