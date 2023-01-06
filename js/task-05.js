/*Напиши скрипт, який під час набору тексту в інпуті input#name-input 
(подія input), підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".*/

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
    nameOutput.textContent = nameInput.value
    ?  nameInput.value
    : 'Anonymous';
} 