const root = document.getElementById('root');

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
