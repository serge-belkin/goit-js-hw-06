// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

"use strict";

const counterValue = document.querySelector('.value');

const subValue = document.querySelector('.sub-value');

const addValue = document.querySelector('.add-value');

subValue.addEventListener('click', decrement);
addValue.addEventListener('click', increment);

function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function increment() { 
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

