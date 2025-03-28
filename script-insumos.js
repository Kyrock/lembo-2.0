document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    if (!form) {
        console.error('Form not found');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const id = document.getElementById('id');
        const valor = document.getElementById('valor');
        const cantidad = document.getElementById('cantidad');
        const unidad = document.getElementById('unidad');
        const descripcion = document.getElementById('descripcion');

        const formData = {
            name: name ? name.value.trim() : '',
            id: id ? parseInt(id.value) : 0,
            valor: valor ? parseFloat(valor.value) : 0,
            cantidad: cantidad ? parseInt(cantidad.value) : 0,
            unidad: unidad ? unidad.value : '',
            descripcion: descripcion ? descripcion.value.trim() : ''
        };

        // Validación
        if (!formData.name || !formData.id || !formData.valor || !formData.cantidad || !formData.unidad) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5500/insumo', formData);
            console.log('Insumo registrado:', response.data);
            alert('Insumo agregado exitosamente');
            form.reset();
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Ocurrió un error al registrar el insumo. Por favor, intenta nuevamente.');
        }
    });
});