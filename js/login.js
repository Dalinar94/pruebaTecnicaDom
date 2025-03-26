const root = document.getElementById('root');

//contenedor del formulario
const loginBox = document.createElement('div');
loginBox.className = 'login-box';

//Imagen del logo
const logoBox = document.createElement('div');
logoBox.className = 'logo-box';
loginBox.appendChild(logoBox);

const imgLogo = document.createElement('img');
imgLogo.src = "https://www.bicnet.es/wp-content/uploads/2017/03/logo-bicnet-web.png";
imgLogo.alt = 'Error en la imagen';
logoBox.appendChild(imgLogo);

//Titulo
const titulo = document.createElement('h2');
titulo.textContent='Iniciar Sesion';
loginBox.appendChild(titulo);

//Usuario
const usuario = document.createElement('input');
usuario.type = 'text';
usuario.id = 'username';
usuario.placeholder = 'Usuario';
loginBox.appendChild(usuario);

//Contraseña
const password = document.createElement('input');
password.type = 'password';
password.id = 'password';
password.placeholder = 'Contraseña';
loginBox.appendChild(password);

//Paises
const paises = document.createElement('select');
paises.className = 'select-box';
const paisesArray = ['España', 'Francia', 'Italia', 'Alemania', 'Portugal', 'Reino Unido', 'Rusia', 'China', 'Japon', 'EEUU'];

for (let i = 0; i < paisesArray.length; i++) {
    const option = document.createElement('option');
    option.value = paisesArray[i];
    option.textContent = paisesArray[i];
    paises.appendChild(option);
}
loginBox.appendChild(paises);

//Button
const button = document.createElement('button');
button.textContent = 'Iniciar Sesion';
button.addEventListener('click', login);
loginBox.appendChild(button);

//Enlaces de registro y olvido de contraseña
const linksDiv = document.createElement('div');
linksDiv.className = 'links';

const LinkRegistro = document.createElement('a');
LinkRegistro.href = ''; //Aqui va el link de registro
LinkRegistro.textContent = 'Registro';
linksDiv.appendChild(LinkRegistro);

const OlvidarContraseña= document.createElement('a');
OlvidarContraseña.href = '';//Aqui va el link de olvido de contraseña
OlvidarContraseña.textContent = '¿Has olvidado la contraseña?';
linksDiv.appendChild(OlvidarContraseña);

loginBox.appendChild(linksDiv);

//footer del login
const footer = document.createElement('footer');
footer.textContent = '© 2025 BICNET';
loginBox.appendChild(footer);


//Esto sirve para agregar el elemento al root
root.appendChild(loginBox);
root.appendChild(logoBox);

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    const adminUsers ={
        "admin": "admin",
        "user": "user",
        "fran":"1234"
    }

    if (adminUsers[username] && adminUsers[username] === password) {
        alert('Login exitoso');
    } else {
        alert('Login fallido');
    }

}


