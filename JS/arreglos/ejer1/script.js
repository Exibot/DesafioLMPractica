const sucursales = [
    "Sucursal 1",
    "Sucursal 2",
    "Sucursal 3",
    "Sucursal 4",
    "Sucursal 5",
    "Sucursal 6",
];
let lista = document.getElementById("sucursales");

for (let sucursal of sucursales) {
    let li = document.createElement("li");
    li.textContent = sucursal;
    lista.appendChild(li);
}
