/*Напиши скрипт, який змінює кольори фону елемента <body> 
через інлайн-стиль по кліку на button.change-color 
і виводить значення кольору в span.color.*/


const bgcEl = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', onClicklBtnChangeColor);

function onClicklBtnChangeColor() {
  const newBackgroundColor = getRandomHexColor();

  document.body.style.backgroundColor = newBackgroundColor;
  bgcEl.textContent = newBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
