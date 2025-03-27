document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM usando getElementById
    const nameInput = document.getElementById('name');
    const tipoInput = document.getElementById('id'); 
    const ubicacionSelect = document.getElementById('Ubicacion');
    const descripcionTextarea = document.getElementById('descripcion');
    const userForm = document.querySelector('.form-container__form');

    // Objeto para almacenar los datos del cultivo
    const cultivoData = {
        name: '',
        tipo: '',
        ubicacion: '',
        descripcion: ''
    };

    // Evento para validar el formulario al enviar
    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores actuales de los campos
        cultivoData.name = nameInput.value.trim();
        cultivoData.tipo = tipoInput.value.trim();
        cultivoData.ubicacion = ubicacionSelect.value.trim();
        cultivoData.descripcion = descripcionTextarea.value.trim();

        console.log("Enviando formulario...", cultivoData);

        // Validar que los campos no estén vacíos
        if (
            cultivoData.name === '' ||
            cultivoData.tipo === '' ||
            cultivoData.ubicacion === '' ||
            cultivoData.descripcion === ''
        ) {
            showMessage('Error: Debes llenar todos los campos', 'error');
            return;
        }else{
            showMessage('¡Cultivo agregado con éxito!', 'correcto');
        setTimeout(() => {
            window.location.href = 'cultivos.html';
        }, 3000);
        }
        
    });
    // Función para leer el texto de los inputs
    function readText(e) {
        console.log('Leyendo input:', e.target);
        if (e.target === nameInput) {
            cultivoData.name = e.target.value.trim();
        } else if (e.target === tipoInput) {
            cultivoData.tipo = e.target.value.trim();
        } else if (e.target === ubicacionSelect) {
            cultivoData.ubicacion = e.target.value.trim();
        } else if (e.target === descripcionTextarea) {
            cultivoData.descripcion = e.target.value.trim();
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
        }, 3000);
    }
    // Eventos para capturar los valores de los inputs
    nameInput.addEventListener('input', readText);
    tipoInput.addEventListener('input', readText);
    ubicacionSelect.addEventListener('change', readText);
    descripcionTextarea.addEventListener('input', readText);
});