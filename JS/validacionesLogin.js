document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    const userNameInput = document.querySelector('.userNameInput');
    const userPasswordInput = document.querySelector('.userPasswordInput');
    const userForm = document.querySelector('.userForm'); 

    // Verificar que los elementos se seleccionaron correctamente
    console.log('Elementos del DOM:', { userNameInput, userPasswordInput, userForm });
    // Objeto para almacenar los datos del usuario
    const userData = {
        userName: '',
        userPassword: ''
    };

    // Función para leer el texto de los inputs
    function readText(e) {
        console.log('Leyendo input:', e.target);
        if (e.target === userNameInput) {
            userData.userName = e.target.value.trim();
        } else if (e.target === userPasswordInput) {
            userData.userPassword = e.target.value.trim();
        }
        console.log('Datos actualizados:', userData);
    }

    // Función para mostrar mensajes de error o éxito
    function showMessage(message, type) {
        const messageElement = document.createElement('P');
        messageElement.textContent = message;
        messageElement.classList.add(type === 'error' ? 'error' : 'correcto');
        userForm.appendChild(messageElement);

        setTimeout(() => {
            messageElement.remove();
        }, 4000);
    }

    // Evento para validar el formulario al enviar
    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario
        const { userName, userPassword } = userData;
        console.log("Enviando formulario...", { userName, userPassword });

        // Validar que los campos no estén vacíos
        if (userName === '' || userPassword === '') {
            showMessage('Error: Debes llenar todos los campos', 'error');
            return;
        }
        showMessage('¡Tus datos fueron enviados con éxito!', 'correcto');
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    });

    // Eventos para capturar los valores de los inputs
    userNameInput.addEventListener('input', readText);
    userPasswordInput.addEventListener('input', readText);
});