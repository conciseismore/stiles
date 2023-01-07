'use strict';

const messageWrap = document.querySelector('.message-wrap');
const message = document.querySelector('.message');

messageWrap.addEventListener('click', (e) => {
  message.classList.toggle('is-active');

  setTimeout(() => {
    message.classList.remove('is-active');
  }, 3000);
});
