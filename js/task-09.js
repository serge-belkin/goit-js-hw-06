// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
//  на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('button.change-color');

const body = document.querySelector('body');

const colorName = document.querySelector('span.color');

changeBtn.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
})