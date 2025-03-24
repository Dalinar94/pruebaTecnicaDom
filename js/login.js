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
