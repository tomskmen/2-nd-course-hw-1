const cardContentButtonEl = document.getElementById('colorButton');
const miniGame = document.querySelector ('.galery-conteiner')
cardContentButtonEl.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  miniGame.style.backgroundColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  alert('Нажмите OK, чтобы поменять цвет');
});


function playGame() {
const playGame = document.querySelector ('.mini-igralka')
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  miniGame.style.backgroundColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  alert('Нажмите OK, чтобы поменять цвет');
}

document.getElementById("colorButtonn").addEventListener("click", playGame);