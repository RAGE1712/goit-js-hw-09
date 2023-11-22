// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
// Такий таймер може використовуватися у блогах та інтернет - магазинах, сторінках реєстрації подій,
// під час технічного обслуговування тощо.Подивися демо - відео роботи таймера.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-aio-3.2.6.min.js';

const refs = {
  startButton: document.querySelector('button'),
  day: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  input: document.querySelector('#datetime-picker'),
};
refs.startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > new Date()) {
            refs.startButton.disabled = false;
            refs.startButton.addEventListener('click', startTimer);
            function startTimer() {
                Notiflix.Notify.info('Timer Started');
                refs.startButton.disabled = true;
                refs.input.disabled = true;
                const timerId = setInterval(() => {
                    const timer = convertMs(
                      selectedDates[0] - new Date()
                    );
                refs.day.textContent = `${timer.days}`;
                refs.hours.textContent = `${timer.hours}`;
                refs.minutes.textContent = `${timer.minutes}`;
                    refs.seconds.textContent = `${timer.seconds}`;
                    if (selectedDates[0] - new Date() < 1000) {
                        clearInterval(timerId);
                        refs.startButton.disabled = false;
                        Notiflix.Notify.success('Timer Ends');
                        refs.input.disabled = false;
                    }
                }, 1000);
                
            }
        } else {
            refs.startButton.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        }
  },
};

flatpickr('input[type="text"]', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

