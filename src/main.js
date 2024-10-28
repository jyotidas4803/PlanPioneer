import "./index.css";

import SingleTask from "./components/SingleTask";
import { titleCase } from "./utils";

// === MARK: DOM Selection
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");

// Variables
const tasks = [];

function renderTasks() {
  taskContainerEl.innerHTML = "";

  const frag = document.createDocumentFragment();
  tasks.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted));
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
    id: tasks.length,
  };

  //  Adding
  tasks.unshift(newTask);

  renderTasks();

  console.log(tasks);

  //  Clearing input value
  inputEl.value = "";
});

// Render the current year
const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();