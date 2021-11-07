// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", onDecrementBtnClick);

incrementBtnEl.addEventListener("click", onIncrementBtnClick);