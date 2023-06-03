const baraja = [];

for (let i = 1; i <= 12; i++) {
  for (let j = 0; j < 4; j++) {
    baraja.push({
      numero: i,
      palo: j
    });
  }
}

function obtenerMano(baraja) {
  const mano = [];
  const numCartas = 5;

  for (let i = 0; i < numCartas; i++) {
    const cartaIndex = Math.floor(Math.random() * baraja.length);
    const carta = baraja.splice(cartaIndex, 1)[0];
    mano.push(carta);
  }

  return mano;
}

function mostrarMano() {
  const mano = obtenerMano(baraja);
  const handElement = document.getElementById('mano');
  handElement.innerHTML = '';

  for (let i = 0; i < mano.length; i++) {
    const carta = mano[i];
    const cartaElement = document.createElement('div');
    cartaElement.classList.add('carta');
    cartaElement.textContent = obtenerNombreCarta(carta);
    handElement.appendChild(cartaElement);
  }
}

function obtenerNombreCarta(carta) {
  const palos = ['♦️', '♠️', '♥', '♣'];
  const figuras = ['As', '2', '3', '4', '5', '6', '7', 'S', 'C', 'R'];
  const palo = palos[carta.palo];
  const figura = carta.numero <= 7 ? carta.numero.toString() : (carta.numero === 8 ? 'Sota' : carta.numero === 9 ? '🐎' : '🤴');

  return figura + palo;
}

const dealButton = document.getElementById('boton');
dealButton.addEventListener('click', mostrarMano);
