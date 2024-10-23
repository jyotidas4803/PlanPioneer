import "./index.css";

const showDateEL = document.querySelector(".showDate");
showDateEL.textContent=new Date().getFullYear()


const inputEl = document.querySelector(".input");

function handleInput(event) {
    if (event.key === "Enter") {
        console.log(inputEl.value);  // Logs the entire input once "Enter" is pressed
    }
}

inputEl.addEventListener('keyup', handleInput);