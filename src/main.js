import "./index.css";


import { titleCase } from "./utils";
import SingleTask from "./components/SingleTask";

// __DOM manipulation
const showDateEL = document.querySelector(".showDate");
const inputEl = document.querySelector("[data-user-value]")
const formEl = document.querySelector("[data-form]");
const taskContainerEl = document.querySelector("[data-task-container]")

// vars

const tasks = [];

// current Year
showDateEL.textContent = new Date().getFullYear()




function renderTask() {
    taskContainerEl.innerHTML = " ";
    const frag = document.createDocumentFragment()
    tasks.forEach((task) => {
        frag.appendChild(SingleTask(task.text))
    })

    taskContainerEl.appendChild(frag)
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inputEl.value) return;
    const newTask = {
        text: titleCase(inputEl.value),
        isCompleted: false,
        id: tasks.length
    };

    // adding task
    tasks.unshift(newTask)
    renderTask();

    console.log(tasks);
    inputEl.value = " "
})