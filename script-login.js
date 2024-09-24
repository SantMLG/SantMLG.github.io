/*document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ya está autenticado
    const dashboardLink = document.getElementById('dashboard-link');
    if (dashboardLink) {
        const isAuthenticated = localStorage.getItem('auth') === 'true';
        dashboardLink.style.display = isAuthenticated ? 'block' : 'none';
    }

    // Lógica del botón de inicio de sesión en el login.html
    const loginButton = document.getElementById('loginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validar credenciales
            if (username === 'admin' && password === '1234') {
                localStorage.setItem('auth', 'true');
                alert('Bienvenido, admin');
                window.location.href = 'index.html'; // Redirigir al index después de iniciar sesión
            } else {
                localStorage.setItem('auth', 'false');
                alert('Inicio de sesión como visitante');
                window.location.href = 'index2.html'; // Redirigir al index después de iniciar sesión como visitante
            }
        });
    }
});*/



document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Autenticación simple (puedes mejorarla con validaciones más robustas)
    if (username === 'user1' && password === 'password1') {
        localStorage.setItem('currentUser', 'user1');
        window.location.href = 'index.html';
    } else if (username === 'user2' && password === 'password2') {
        localStorage.setItem('currentUser', 'user2');
        window.location.href = 'index.html';
    } else if (username === 'user3' && password === 'password3') {
        localStorage.setItem('currentUser', 'user3');
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});