export default function(text, isCompleted){
    const label=document.createElement("label");
    label.classList.add("label", "cursor-pointer")
    label.innerHTML =`
    <span class="label-text">${text}</span>
        <input type="checkbox" ${isCompleted && "checked"} checked="checked" class="checkbox" />
    `;
    return label;
}