/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
 перевіряє його вміст щодо правильної кількості введених символів.
1.Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
2. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним
3. Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.*/

const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", onBlurInput);


function onBlurInput(event) {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};


