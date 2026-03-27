let peliculas = [
    {
        id: 1,
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        año: 1972,
    },
    {
        id: 2,
        titulo: "El Caballero Oscuro",
        director: "Christopher Nolan",
        año: 2008,
    },
    {
        id: 3,
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        año: 1994,
    },
    {
        id: 4,
        titulo: "Terminator 2: El Juicio Final",
        director: "James Cameron",
        año: 1991,
    },
];

let tablaPeliculas = document.getElementsByClassName("tablaPeliculas")[0];

let html = "";
for (let pelicula of peliculas) {
    html += `
    <tr>
        <td>${pelicula.id}</td>
        <td>${pelicula.titulo}</td>
        <td>${pelicula.director}</td>
        <td>${pelicula.año}</td>
    </tr>
`;
}

tablaPeliculas.innerHTML = html;

let nombrePelicula = "Terminator 2: El Juicio Final";
let indicePelicula = buscarIndicePorId(nombrePelicula);
eliminarPelicula(indicePelicula);

function buscarIndicePorId(nombrePelicula) {
    let indicePelicula = peliculas.findIndex(
        (pelicula) => pelicula.titulo === nombrePelicula,
    );
    return indicePelicula;
}

function eliminarPelicula(indicePelicula) {
    if (indicePelicula !== -1) {
        peliculas.splice(indicePelicula, 1);
        actualizarTabla();
    }
}

function actualizarTabla() {
    let html = "";
    for (let pelicula of peliculas) {
        html += `
        <tr>
            <td>${pelicula.id}</td>
            <td>${pelicula.titulo}</td>
            <td>${pelicula.director}</td>
            <td>${pelicula.año}</td>
        </tr>
    `;
    }
    tablaPeliculas.innerHTML = html;
}
