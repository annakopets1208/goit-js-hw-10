import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: '#59a10d',
        titleColor: '#fff',
        messageColor: '#fff',
        close: true,
        progressBar: true,
        progressBarColor: '#fff',
        titleSize: '16px',
        messageSize: '16px',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        close: true,
        progressBar: true,
        progressBarColor: '#fff',
        titleSize: '16px',
        messageSize: '16px',
        position: 'topRight',
      });
    });
});
