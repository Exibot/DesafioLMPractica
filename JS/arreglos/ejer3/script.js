let departamentos = [
    {
        departamento: 323,
        propietario: "Natalia Jiménez",
        telft: "+56 9 5312 4578",
    },
    { departamento: 123, propietario: "Luis Fonsi", telft: "+56 9 4612 7894" },
    {
        departamento: 431,
        propietario: "David Bisbal",
        telft: "+56 9 8978 4465",
    },
    {
        departamento: 412,
        propietario: "Noel Schajris",
        telft: "+56 9 9874 6432",
    },
    {
        departamento: 203,
        propietario: "Ricardo Montaner",
        telft: "+56 9 8764 6813",
    },
];

let nuevosDepartamentos = [
    {
        departamento: 555,
        propietario: "Shakira",
        telft: "+56 9 1234 5678",
    },
    {
        departamento: 666,
        propietario: "Enrique Iglesias",
        telft: "+56 9 4321 8765",
    },
];

let posicion = ""
agregarDepartamentoAlArreglo(nuevosDepartamentos, posicion);
eliminarOModificarDepartamento({ departamento: 123 }, "Eliminar");
eliminarOModificarDepartamento(
    { departamento: 431, propietario: "David Bisbal", telft: "+56 9 1111 2222" },
    "Modificar"
);


let html = "";
for (let departamento of departamentos) {
    html += `
    <tr>
        <td>${departamento.departamento}</td>
        <td>${departamento.propietario}</td>
        <td>${departamento.telft}</td>
    </tr>
    `;
}
document.querySelector("tbody").innerHTML = html;

function agregarDepartamentoAlArreglo(nuevosDepartamentos, posicion) {
    for (let nuevoDepartamento of nuevosDepartamentos) {
        if (posicion === "Inicio") {
            departamentos.unshift(nuevoDepartamento);
        } else {
            departamentos.push(nuevoDepartamento);
        }
    }
}

function eliminarOModificarDepartamento(departamento, accion) {
    if (accion === "Eliminar") {
        departamentos = departamentos.filter(
            (d) => d.departamento !== departamento.departamento
        );
    } else if (accion === "Modificar") {
        let index = departamentos.findIndex(
            (d) => d.departamento === departamento.departamento
        );
        if (index !== -1) {
            departamentos[index] = departamento;
        }
    }
}

