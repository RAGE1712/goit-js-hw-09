// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону < body > 
// на випадкове значення, використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
    body: document.querySelector('body'),
    startButton: document.querySelector('button[data-start]'),
    stopButton : document.querySelector('button[data-stop]')
}

refs.startButton.addEventListener('click', () => {
    const timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startButton.disabled = true;
})

refs.stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startButton.disabled = false;
});



