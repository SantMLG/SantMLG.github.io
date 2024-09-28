document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Autenticación simple (puedes mejorarla con validaciones más robustas)
    if (username === 'user1' && password === 'password1') {
        localStorage.setItem('currentUser', 'user1');
        window.location.href = 'dashboard.html';
    } else if (username === 'user2' && password === 'password2') {
        localStorage.setItem('currentUser', 'user2');
        window.location.href = 'dashboard.html';
    } else if (username === 'user3' && password === 'password3') {
        localStorage.setItem('currentUser', 'user3');
        window.location.href = 'dashboard.html';
    } else if (username === 'admin' && password === 'administrador'){
        localStorage.setItem('currentUser', 'admin');
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});