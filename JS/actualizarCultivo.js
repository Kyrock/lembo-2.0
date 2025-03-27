document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM usando getElementById
    const nombreInput = document.getElementById('nombre');
    const tamañoInput = document.getElementById('tamaño');
    const idInput = document.getElementById('id');
    const cultivoSelect = document.getElementById('cultivo');
    const descriptionTextarea = document.getElementById('description');
    const userForm = document.querySelector('.form__campo');

    // Objeto para almacenar los datos del cultivo
    const cultivoData = {
        nombre: '',
        tamaño: '',
        id: '',
        cultivo: '',
        description: ''
    };
    // Evento para validar el formulario al enviar
    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores actuales de los campos
        cultivoData.nombre = nombreInput.value.trim();
        cultivoData.tamaño = tamañoInput.value.trim();
        cultivoData.id = idInput.value.trim();
        cultivoData.cultivo = cultivoSelect.value.trim();
        cultivoData.description = descriptionTextarea.value.trim();

        console.log("Enviando formulario...", cultivoData);

        // Validar que los campos no estén vacíos
        if (
            cultivoData.nombre === '' ||
            cultivoData.tamaño === '' ||
            cultivoData.id === '' ||
            cultivoData.cultivo === '' || 
            cultivoData.description === ''
        ) {
            showMessage('Error: Debes llenar todos los campos', 'error');
            return;
        } else {
            showMessage('¡Cultivo actualizado con éxito!', 'correcto');
            setTimeout(() => {
                window.location.href = 'cultivos.html';
            }, 4000);
        }

    });
    // Función para leer el texto de los inputs
    function readText(e) {
        console.log('Leyendo input:', e.target);
        if (e.target === nombreInput) {
            cultivoData.nombre = e.target.value.trim();
        } else if (e.target === tamañoInput) {
            cultivoData.tamaño = e.target.value.trim();
        } else if (e.target === idInput) {
            cultivoData.id = e.target.value.trim();
        } else if (e.target === cultivoSelect) {
            cultivoData.cultivo = e.target.value.trim();
        } else if (e.target === descriptionTextarea) {
            cultivoData.description = e.target.value.trim();
        }
        console.log('Datos actualizados:', cultivoData);
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
    nombreInput.addEventListener('input', readText);
    tamañoInput.addEventListener('input', readText);
    idInput.addEventListener('input', readText);
    cultivoSelect.addEventListener('change', readText); // Usar 'change' para el select
    descriptionTextarea.addEventListener('input', readText);
});