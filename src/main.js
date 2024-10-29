import "./index.css";

import SingleTask from "./components/SingleTask";
import { titleCase } from "./utils";

// === MARK: DOM Selection
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");
// const labelEL=document.querySelector("label")


// Variables
const state = [];

function renderTasks() {
  taskContainerEl.innerHTML = "";

  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted, task.id));
  });
  taskContainerEl.appendChild(frag);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent refresh
  if (!inputEl.value) return; // Gaurd Clause

  //  Creating new task
  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted: true,
    id: state.length,
  };

  //  Adding
  state.unshift(newTask);

  renderTasks();

  console.log(state);

  //  Clearing input value
  inputEl.value = "";
});

taskContainerEl.addEventListener("click", (e)=>{
if((e.target.tagName ==="INPUT")){
  console.log(e.target.id)

}
})

// Render the current year
const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();