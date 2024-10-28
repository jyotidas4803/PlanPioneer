import "./index.css";


import { titleCase } from "./utils";

// __DOM manipulation
const showDateEL = document.querySelector(".showDate");
const inputEl=document.querySelector("[data-user-value]")
const formEl=document.querySelector("[data-form]");

// vars

const tasks=[];

// current Year
showDateEL.textContent=new Date().getFullYear()


// const inputEl = document.querySelector(".input");

// function handleInput(event) {
//     if (event.key === "Enter") {
//         console.log(inputEl.value);  // Logs the entire input once "Enter" is pressed
//     }
// }

// inputEl.addEventListener('keyup', handleInput);


formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!inputEl.value) return;
const newTask ={
    text:titleCase(inputEl.value),
    isCompleted:false,
    id: tasks.length
};

tasks.unshift(newTask)

    console.log(tasks);
    inputEl.value= " "
})