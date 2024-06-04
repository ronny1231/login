document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            // Obtener valores de los campos
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Validar que los campos no estén vacíos
            if (username === '' || password === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Simulación de autenticación
            const storedUser = localStorage.getItem('username');
            const storedPass = localStorage.getItem('password');

            if (username === storedUser && password === storedPass) {
                alert('Inicio de sesión exitoso.');
                // Redirigir a la página de inicio o dashboard
                window.location.href = 'https://ronny1231.github.io/chef/';
            } else {
                alert('Nombre de usuario o contraseña incorrectos.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            // Obtener valores de los campos
            const newUsername = document.getElementById('new-username').value.trim();
            const newPassword = document.getElementById('new-password').value.trim();
            const email = document.getElementById('email').value.trim();

            // Validar que los campos no estén vacíos
            if (newUsername === '' || newPassword === '' || email === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Guardar los datos de registro en el almacenamiento local
            localStorage.setItem('username', newUsername);
            localStorage.setItem('password', newPassword);
            localStorage.setItem('email', email);

            alert('Registro exitoso. Redirigiendo a la página de inicio de sesión.');
            // Redirigir a la página de inicio de sesión
            window.location.href = 'https://ronny1231.github.io/login/';
        });
    }
});

document.getElementById('menu-button').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});
