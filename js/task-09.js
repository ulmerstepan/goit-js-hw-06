function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
// при клике на button.change - color и выводит значение цвета в span.color.

const targetBtn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

targetBtn.addEventListener('click', (color) => {
  color = getRandomHexColor();
  document.body.style.background = color;
  textEl.textContent = color;
})

