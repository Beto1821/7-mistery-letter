const cartaGerada = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function geraCarta() {
  const entrada = document.getElementById('carta-texto');
  const texto = entrada.value;
  const lista = texto.split(' ');
  console.log(lista.lenght);
  console.log(lista);
  cartaGerada.innerHTML = '';
  for (let i = 0; i < lista.length; i += 1) {
    const lineSpam = document.createElement('span');
    lineSpam.innerText = lista[i];
    lineSpam.classList.add(estilo[Math.floor(Math.random() * 3)]);
    lineSpam.classList.add(tamanho[Math.floor(Math.random() * 3)]);
    lineSpam.classList.add(rotacao[Math.floor(Math.random() * 2)]);
    lineSpam.classList.add(inclinacao[Math.floor(Math.random() * 2)]);
    cartaGerada.appendChild(lineSpam);
  }
}

function validaInput() {
  const entrada = document.getElementById('carta-texto');
  const texto = entrada.value;
  if (texto < 1) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    geraCarta();
  }
}

const btn = document.getElementById('criar-carta');
btn.addEventListener('click', validaInput);
