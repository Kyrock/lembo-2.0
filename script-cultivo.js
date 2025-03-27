document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-cultivo");

    formulario.addEventListener("submit", async function (e) {
        e.preventDefault(); // Evita el envío normal del formulario

        // Capturar valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const tipo = document.getElementById("tipo").value.trim();
        const ubicacion = document.getElementById("ubicacion").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();

        // Validar que los campos no estén vacíos
        if (!nombre || !tipo || !ubicacion || !descripcion) {
            alert("❌ Todos los campos son obligatorios.");
            return;
        }

        // Crear el objeto con los datos
        const nuevoCultivo = { nombre, tipo, ubicacion, descripcion };

        try {
            // Enviar datos al servidor con fetch()
            const respuesta = await fetch("http://localhost:3000/api/cultivos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoCultivo),
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                alert("✅ Cultivo agregado correctamente");
                formulario.reset(); // Limpiar el formulario
            } else {
                alert(`❌ Error: ${datos.error}`);
            }
        } catch (error) {
            console.error("❌ Error en la petición:", error);
            alert("❌ Error al conectar con el servidor.");
        }
    });
});
