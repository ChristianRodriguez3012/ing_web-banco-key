const teclado = document.querySelector('.teclado');
const inputValor = document.querySelector('#input-valor');
const puntos = Array.from(document.querySelectorAll('.punto'));

inputValor.style.display = 'none';

const puntosContenedor = document.querySelector('.puntos-contenedor');

puntosContenedor.style.display = 'flex';
puntosContenedor.style.flexDirection = 'row';
puntosContenedor.style.justifyContent = 'center';

const tecladoYPuntosContenedor = document.querySelector('.teclado-y-puntos-contenedor');

tecladoYPuntosContenedor.appendChild(puntosContenedor);
tecladoYPuntosContenedor.appendChild(teclado);

const teclasDisponibles = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function actualizarPuntos() {
  const valor = inputValor.value.length;
  puntos.forEach((punto, index) => {
    punto.style.backgroundColor = index < valor ? '#534a69' : '#cecbd6';
  });
}

function generarTeclado() {
  teclado.innerHTML = '';

  const teclasAleatorias = teclasDisponibles.slice();
  shuffle(teclasAleatorias);

  const columnas = [[], [], []];
  teclasAleatorias.forEach((tecla, index) => {
    if (index < 3) {
      columnas[0].push(tecla);
    } else if (index < 7) {
      columnas[1].push(tecla);
    } else {
      columnas[2].push(tecla);
    }
  });

  columnas.forEach((columna, index) => {
    const divColumna = document.createElement('div');
    divColumna.style.display = 'flex';
    divColumna.style.flexDirection = 'column';
    divColumna.style.alignItems = 'center';

    columna.forEach(tecla => {
      const teclaElement = document.createElement('div');
      teclaElement.classList.add('tecla');
      teclaElement.textContent = tecla;

      teclaElement.addEventListener('click', () => {
        if (inputValor.value.length < 6) {
          inputValor.value += tecla;
          actualizarPuntos();
        }
      });

      divColumna.appendChild(teclaElement);
    });

    if (index === 2) {
      const botonLimpiar = document.createElement('div');
      botonLimpiar.classList.add('tecla', 'tecla-limpiar');

      botonLimpiar.addEventListener('click', () => {
        inputValor.value = '';
        actualizarPuntos();
      });

      divColumna.appendChild(botonLimpiar);
    }

    teclado.appendChild(divColumna);
  });
}

generarTeclado();

const contenedorBlanco = document.querySelector('.teclado-contenedor');

contenedorBlanco.innerHTML = '';
contenedorBlanco.appendChild(puntosContenedor);
contenedorBlanco.appendChild(teclado);

document.body.appendChild(inputValor);

const botonOjo = document.createElement('div');
botonOjo.classList.add('boton-ojo');

botonOjo.style.backgroundImage = "url('src/eye.png')";
botonOjo.style.backgroundSize = 'cover';
botonOjo.style.width = '10px'; // Añadido
botonOjo.style.height = '10px'; // Añadido

botonOjo.addEventListener('click', () => {
  if (inputValor.style.display === 'none') {
    inputValor.style.display = 'block';
  } else {
    inputValor.style.display = 'none';
  }
});

document.body.appendChild(botonOjo);