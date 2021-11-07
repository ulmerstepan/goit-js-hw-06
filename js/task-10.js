function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX.
//    Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const valueEL = document.querySelector('[type=number]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');

function createBtnCkick() {

  const colectionOfBoxes = [];

  let size = 30;
  
  for (let i = 1; i <= valueEL.value; i+=1) {
  
    const divEl = document.createElement('div');
    divEl.textContent = i;
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    
    size += 10;
    colectionOfBoxes.push(divEl);
  }

  container.append(...colectionOfBoxes);

} 

createBtn.addEventListener('click', createBtnCkick);
destroyBtn.addEventListener('click', () => container.innerHTML = '');