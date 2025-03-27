document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM usando getElementById
    const nameInput = document.getElementById('name');
    const idInput = document.getElementById('id');
    const valorInput = document.getElementById('valor');
    const cantidadInput = document.getElementById('cantidad');
    const unidadSelect = document.getElementById('unidad');
    const descripcionTextarea = document.getElementById('descripcion');
    const userForm = document.querySelector('.form');

    // Objeto para almacenar los datos del insumo
    const insumoData = {
        name: '',
        id: '',
        valor: '',
        cantidad: '',
        unidad: '',
        descripcion: ''
    };
    // Evento para validar el formulario al enviar
    userForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores actuales de los campos
        insumoData.name = nameInput.value.trim();
        insumoData.id = idInput.value.trim();
        insumoData.valor = valorInput.value.trim();
        insumoData.cantidad = cantidadInput.value.trim();
        insumoData.unidad = unidadSelect.value.trim();
        insumoData.descripcion = descripcionTextarea.value.trim();
        console.log("Enviando formulario...", insumoData);

        // Validar que los campos no estén vacíos
        if (
            insumoData.name === '' || insumoData.id === '' || insumoData.valor === '' || insumoData.cantidad === '' || insumoData.unidad === '' || insumoData.descripcion === ''
        ) {
            showMessage('Error: Debes llenar todos los campos', 'error');
            return;
        }else{
        showMessage('¡Insumo actualizado con éxito!', 'correcto');
        setTimeout(() => {
            window.location.href = 'insumo.html';
        }, 2000);
        }
    });
    // Función para leer el texto de los inputs
    function readText(e) {
        console.log('Leyendo input:', e.target);
        if (e.target === nameInput) {
            insumoData.name = e.target.value.trim();
        } else if (e.target === idInput) {
            insumoData.id = e.target.value.trim();
        } else if (e.target === valorInput) {
            insumoData.valor = e.target.value.trim();
        } else if (e.target === cantidadInput) {
            insumoData.cantidad = e.target.value.trim();
        } else if (e.target === unidadSelect) {
            insumoData.unidad = e.target.value.trim();
        } else if (e.target === descripcionTextarea) {
            insumoData.descripcion = e.target.value.trim();
        }
        console.log('Datos actualizados:', insumoData);
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
    idInput.addEventListener('input', readText);
    valorInput.addEventListener('input', readText);
    cantidadInput.addEventListener('input', readText);
    unidadSelect.addEventListener('change', readText); // Usar 'change' para el select
    descripcionTextarea.addEventListener('input', readText);
});