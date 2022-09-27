// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити,
//     колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNum = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');

const createBox = amount => {
  const elements = [];
  for (let index = 0; index < amount; index++) {
    const div = document.createElement('div');
    div.style.background = getRandomHexColor();
    div.style.width = `${30 + 10 * index}px`;
    div.style.height = `${30 + 10 * index}px`;
    
    elements.push(div);
  }
  return elements;
}

const destroyBox = () => {
  boxes.innerHTML = ''
};

createBtn.addEventListener('click', () => {
  let newBoxes = createBox(inputNum.value);
  boxes.append(...newBoxes);
})

console.log(inputNum.value);

destroyBtn.addEventListener('click', () => {
  destroyBox.call()
})