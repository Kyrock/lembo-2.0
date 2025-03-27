document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    const nameInput = document.querySelector('.userName');
    const apellidoInput = document.querySelector('.lastName');
    const idInput = document.querySelector('.userId');
    const rolSelect = document.querySelector('.form__select');
    const userForm = document.querySelector('.form');

    // Objeto para almacenar los datos del usuario
    const userData = {
        name: '',
        apellido: '',
        id: '',
        rol: ''
    };

    // Evento para validar el formulario al enviar
    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores actuales de los campos
        userData.name = nameInput.value.trim();
        userData.apellido = apellidoInput.value.trim();
        userData.id = idInput.value.trim();
        userData.rol = rolSelect.value.trim();
        console.log("Enviando formulario...", userData);
        
        if (
            userData.name === '' || userData.apellido === '' || userData.id === '' || userData.rol === ''
        ) {
            showMessage('Error: Debes llenar todos los campos', 'error');
            return;
        }else{
            // Si todo está correcto, mostrar mensaje de éxito
            showMessage('¡Usuario actualizado con éxito!', 'correcto');
            setTimeout(() => {
                window.location.href = '../HTML/listar-usuarios.html';
            }, 2000);
        }
    });
    // Función para leer el texto de los inputs
    function readText(e) {
        console.log('Leyendo input:', e.target);
        if (e.target === nameInput) {
            userData.name = e.target.value.trim();
        } else if (e.target === apellidoInput) {
            userData.apellido = e.target.value.trim();
        } else if (e.target === idInput) {
            userData.id = e.target.value.trim();
        } else if (e.target === rolSelect) {
            userData.rol = e.target.value.trim();
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
    // Eventos para capturar los valores de los inputs
    nameInput.addEventListener('input', readText);
    apellidoInput.addEventListener('input', readText);
    idInput.addEventListener('input', readText);
    rolSelect.addEventListener('change', readText); // Usar 'change' para el select
});