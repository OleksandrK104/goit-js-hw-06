function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', onChange);

function onChange(event) {
  const randomHexColor = getRandomHexColor();
span.textContent = randomHexColor;
body.style.backgroundColor = randomHexColor;
};