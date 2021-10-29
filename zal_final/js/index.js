const h1 = document.getElementsByTagName('h1')[0];


setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  h1.className = `position-${randomNumber}`;
