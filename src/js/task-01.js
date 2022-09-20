// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const items = document.querySelectorAll('.item');

const itemsQty = items.length;

console.log(`Number of categories:${itemsQty}`);

items.forEach((element) => {
  let categoryTitle = element.querySelector('h2').textContent;

  let categories = element.querySelectorAll('li');

  let categoriesQty = categories.length;

  console.log(categoryTitle);
  console.log(categoriesQty);
});

