document.getElementById("cultivoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Asegurar que usuario_id se agregue correctamente
    const usuarioId = document.getElementById("usuario_id").value;
    formData.append("usuario_id", usuarioId);

    const cultivoData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/api/cultivos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cultivoData),
    })
    .then(response => response.json())
    .then(data => console.log("✅ Respuesta del servidor:", data))
    .catch(error => console.error("❌ Error:", error));
});
