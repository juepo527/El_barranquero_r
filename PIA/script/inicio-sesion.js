const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'usuario@example.com' && password === 'contraseña') {
    //  redirigir a la página de inicio privada
    window.location.href = 'privado.html';
  } else {
    //  mostrar mensaje de error
    const error = document.createElement('div');
    error.innerHTML = 'Correo electrónico o contraseña incorrectos';
    form.appendChild(error);
  }
});
