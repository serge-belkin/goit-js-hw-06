// Напиши скрипт, який реагує на зміну значення input#font - size -
//   control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

"use strict";

const fontSizeSlider = document.querySelector('input#font-size-control');

const msgText = document.querySelector('span#text');

fontSizeSlider.addEventListener('change', element => {
  msgText.style.fontSize = `${element.target.value}px`
});