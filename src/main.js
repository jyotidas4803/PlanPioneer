import "./index.css";
import localforage from "localforage";
import { sortBy as sort } from "lodash";
import SingleTask from "./components/SingleTask";
import { titleCase, randomID } from "./utils";
import { formEl, inputEl, taskContainerEl } from "./domSelection";

// MARK: State
let state = [];

localforage.setDriver(localforage.LOCALSTORAGE);
function updateLocal() {
  localforage.setItem("tasks", state);
}

localforage.getItem("tasks").then((data) => {
  state = data || [];
  renderTasks();
});


// function

function updateClearButtonVisibility() {
  const clearButton = document.getElementById("clear-checked");
  const anyChecked = state.some(task => task.isCompleted);
  clearButton.style.display = anyChecked ? "block" : "none"; // Show or hide the button
}


function clearTasks() {
  state.length = 0;
  updateLocal();
  renderTasks();
  inputEl.value = "";
}

function toggleCompleted(id) {
  state = state.map((task) => {
    if (id === task.id) {
      return { ...task, isCompleted: !task.isCompleted };
    }

    return task;
  });

  updateLocal();
}

// MARK: Render
function renderTasks() {
  taskContainerEl.innerHTML = "";

  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted, task.id));
  });

  taskContainerEl.appendChild(frag);
  updateClearButtonVisibility();
}

// MARK: Listeners
// On new task add
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent refresh
  if (!inputEl.value) return; // Gaurd Clause

  if (inputEl.value === ":clearall") return clearTasks();

  //  Creating new task
  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted: false,
    id: randomID(),
  };

  //  Adding
  state.unshift(newTask);

  // localforage.setItem("tasks", state);
  updateLocal();

  renderTasks();

  //  Clearing input value
  inputEl.value = "";
});

document.getElementById("clear-checked").addEventListener("click", () => {
  state = state.filter(task => !task.isCompleted); // Remove checked tasks from the state
  updateLocal(); // Update local storage
  renderTasks(); // Re-render tasks
  updateClearButtonVisibility(); // Update button visibility
});


// On task toggle
taskContainerEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    toggleCompleted(e.target.id); // Change the state
    state = sort(state, ["isCompleted"]); // Sort on completed
    updateLocal();
    renderTasks();
  }
});

// Render the current year
const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();