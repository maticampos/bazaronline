document.addEventListener("DOMContentLoaded", () => {
    const productos = JSON.parse(sessionStorage.getItem("productosCarrito")) || [];
    const total = sessionStorage.getItem("totalCarrito") || "0.00";
    
    let html = "<h2>Productos:</h2>";
    productos.forEach(p => {
        html += `<div>${p.nombre} - $${p.precio}</div>`;
    });
    html += `<h3>Total: $${total}</h3>`;
    document.getElementById("detalle").innerHTML = html;
    
    // Preparar datos para enviar
    const detalles = productos.map(p => `${p.nombre} - $${p.precio}`).join("\n");
    document.getElementById("carritoData").value = detalles;
    document.getElementById("totalCarrito").value = total;
});