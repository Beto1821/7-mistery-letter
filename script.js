const cartaGerada = document.getElementById('carta-gerada');

function geraCarta() {
  const entrada = document.getElementById('carta-texto');
  const texto = entrada.value;
  const array = texto.split(' ');
  cartaGerada.innerHTML = '';
  for (let i = 0 ; i < array.length; i += 1) {
    const lineSpam = document.createElement('span');
    lineSpam.innerText = array[i];
    cartaGerada.appendChild(lineSpam);
  }
}

const btn = document.getElementById('criar-carta');
btn.addEventListener('click', geraCarta);
