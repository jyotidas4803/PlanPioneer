import "./index.css";

import SingleTask from "./components/SingleTask";
import { titleCase, randomUd } from "./utils";

// package
import localforage from "localforage";

// === MARK: DOM Selection
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");

// localforage.setItem("button","structs");
// console.log("button").then(console.log)

// Variables
let state = [];

localforage.getItem("tasks").then((data)=>{
  state=data || [];
  renderTasks();
})
// localforage.setDriver(localforage.LOCALSTORAGE)

// localforage.setItem("button", "hibernate")
// localforage.setItem("exold", "ARPANet")


// function
function updateLocal(){
  localforage.setItem("tasks",state);

}


function  clearTask(){
  state.length=0;
  // localforage.setItem("tasks",state);
  updateLocal()
  renderTasks();
  inputEl.value="";
}


function isToggle(id){
  state = state.map((task)=>{
    if(id===task.id){
     return {...task, isCompleted:!task.isCompleted};
    }

    return task;
  });
  // localforage.setItem("tasks",state);
  updateLocal()
}

// MARK: Render
function renderTasks() {
  taskContainerEl.innerHTML = "";

  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted, task.id));
  });
  taskContainerEl.appendChild(frag);
  updateLocal()
  // localforage.setItem("tasks",state);
}


// MARK: Listener
formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent refresh
  if (!inputEl.value) return; // Gaurd Clause

  //  Creating new task
  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted: false,
    id:randomUd(),
  };

  //  Adding
  state.unshift(newTask);

  // localforage.setItem("tasks",state);
  updateLocal();

  renderTasks();
 
  inputEl.value = "";
});

taskContainerEl.addEventListener("click", (e)=>{
if(e.target.tagName ==="INPUT"){
  isToggle(e.target.id);

   // uncompleted first
  state.sort((a, b)=> a.isCompleted - b.isCompleted );

  // localforage.setItem("tasks",state);
  updateLocal()

  renderTasks();

}
});

// Render the current year
const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();