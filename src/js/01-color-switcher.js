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
let timerId = null;
refs.stopButton.disabled = true;
refs.startButton.addEventListener('click', () => {
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
})

refs.stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
});



