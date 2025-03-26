const root = document.getElementById('root');

/*
//contenedor del formulario
const selectorNumeros = document.createElement('select');
selectorNumeros.className = 'select-box';

for (let i = 0; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectorNumeros.appendChild(option);
}
root.appendChild(selectorNumeros);
*/

//boton de la API de chuck norris
const botonBroma = document.createElement('button');
botonBroma.textContent = 'Chuck Norris Joke';
botonBroma.className = 'boton-broma';
botonBroma.addEventListener('click',fetchJoke);
root.appendChild(botonBroma);

//div de la broma de chuck
const JokeBox = document.createElement('div');
JokeBox.className = 'joke-box';
root.appendChild(JokeBox);

async function fetchJoke() {
    const respuesta = await fetch('https://api.chucknorris.io/jokes/random');
    const datos = await respuesta.json();
    JokeBox.textContent=datos.value; 
}

