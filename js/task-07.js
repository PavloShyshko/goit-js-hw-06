/*Напиши скрипт, який реагує на зміну значення input#font-size-control 
(подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 В результаті, перетягуючи повзунок, буде змінюватися розмір тексту. */


const inputRangeEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputRangeEl.addEventListener("input", onInputRangeEl);

function onInputRangeEl(event) {
    textEl.style.fontSize = inputRangeEl.value + 'px';
}

