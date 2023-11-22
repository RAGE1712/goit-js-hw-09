import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-aio-3.2.6.min.js';

const refs = {
  formElem: document.querySelector('form'),
};

refs.formElem.addEventListener('submit', onFormSubmit);
let position = 0;
let i = 0;
amount = refs.formElem.elements.amount.value;
delay = Number(refs.formElem.elements.delay.value);
step = Number(refs.formElem.elements.step.value);

function onFormSubmit(event) {
  event.preventDefault();
  for (i; i < amount; i += 1) {
    position += 1
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  position = 0;
  i = 0;  
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    timerId = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}