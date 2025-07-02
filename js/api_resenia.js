function traer() {
    fetch('https://randomuser.me/api') // Llamada a la API
        .then(res => res.json()) // Convertir respuesta a JSON
        .then(res => {
            console.log(res); // Mostrar toda la respuesta en consola
            console.log(res.results[0].email); // Mostrar solo el email en consola

            // Crear el contenido dinámicamente
            contenido.innerHTML = `
                <img src="${res.results[0].picture.large}" width="150px" class="img-fluid rounded-circle">
                <p>Nombre: ${res.results[0].name.first}</p>
                <p>Email: ${res.results[0].email}</p>
                <p>País: ${res.results[0].location.country}</p>

            `;
        })
        .catch(error => console.error('Error al obtener los datos:', error)); // Manejo de errores
}
