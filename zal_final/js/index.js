<<<<<<< HEAD
const h1 = document.getElementsByTagName('h1')[0];


setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  h1.className = `position-${randomNumber}`;
=======
const h1 = document.getElementsByTagName('h1')[0];

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  h1.className = `position-${randomNumber}`;
>>>>>>> 19eadb5464589557f10762684fd597bb21048707
}, 100);