document.addEventListener('DOMContentLoaded', function() {
    fetch("../HTML/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".sidebar, .sidebar__logo, .sidebar__nav-icons").innerHTML = data;
        })
        .catch(error => console.error("Error cargando el sidebar: ", error));
});