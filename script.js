const close = document.querySelector('#close');
const open = document.querySelector('#open');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('showNav'));

close.addEventListener('click', () => container .classList.remove('showNav'))