const cantidad = parseInt(prompt("¿Cuántas cajas deseas crear?"));
const contenedor = document.getElementById('contenedor');

for (let i = 0; i < cantidad; i++) {
    const caja = document.createElement('article');
    caja.textContent = `Caja ${i + 1}`;
    caja.classList.add('caja');
    if (cantidad < 8) {
        caja.classList.add('vertical');
    } else {
        caja.classList.add('horizontal');
    }
    contenedor.appendChild(caja);
}
