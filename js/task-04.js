// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

"use strict";

let counterValue = 0;

const displayValue = document.querySelector('#value');

const subValue = document.querySelector('button[data-action="decrement"]');

const addValue = document.querySelector('button[data-action="increment"]');

subValue.addEventListener('click', () => {
  counterValue--
  displayValue.textContent = counterValue
});

addValue.addEventListener('click', () => {
  counterValue++
  displayValue.textContent = counterValue
});

