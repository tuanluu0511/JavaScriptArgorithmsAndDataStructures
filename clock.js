'use strict';

let container = document.querySelector('.row');
let dateContainer = document.querySelector('.date');
container.innerHTML = '';
let clock;
let dateHtml;
setInterval(() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hour = String(now.getHours()).padStart(2, 0);
  const min = String(now.getMinutes()).padStart(2, 0);
  const sec = String(now.getSeconds()).padStart(2, 0);
  clock = `
  <h1 class="heading">${hour}:${min}:${sec}</h1>
  `;
  dateHtml = ` 
    ${year}/${month}/${date}
  `;
  container.innerHTML = clock;
  dateContainer.innerHTML = dateHtml;
}, 1000);
