const root = document.getElementById('root');

//contenedor del formulario
const loginBox = document.createElement('div');
loginBox.className = 'login-box';

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



//Esto sirve para agregar el elemento al root
root.appendChild(loginBox);

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


