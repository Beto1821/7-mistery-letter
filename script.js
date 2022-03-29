const cartaGerada = document.getElementById('carta-gerada');

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