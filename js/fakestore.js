fetch("https://fakestoreapi.com/products ")
 .then((response) => response.json())
 .then((data) => {
   const contenedor =
document.getElementById("productos-container");
   data.forEach((producto) => {
     contenedor.innerHTML += `
               <div class="card">
                   <img src="${producto.image}"
alt="${producto.title}">
                   <h3>${producto.title}</h3>
                   <p>Precio: $${producto.price}</p>
                   <button
onclick="agregarAlCarrito(${producto.id})">Añadir al
carrito</button>
               </div>
           `; 
   });
 })
 .catch((error) => console.error("Error al obtener productos:", error)); 