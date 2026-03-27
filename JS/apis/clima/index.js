async function getClima() {
    try {
        const response = await fetch(
            "https://api.gael.cloud/general/public/clima",
        );
        const data = await response.json();
        return data;
    } catch (error) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Error al obtener los datos del clima.";
    }
}

async function renderClima() {
    try {
    const clima = await getClima();
    const tableBody = document.getElementById("clima-table-body");
    tableBody.innerHTML = "";
    const lastUpdated = document.getElementById("last-updated");
    lastUpdated.innerHTML = `Última actualización: ${clima[0].HoraUpdate}`;

    clima.forEach((ciudad) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${ciudad.Estacion}</td>
            <td>${ciudad.Temp}</td>
            <td>${ciudad.Humedad}</td>
            <td>${ciudad.Estado}</td>
        `;
        tableBody.appendChild(row);
    });
    } catch (error) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Error al renderizar los datos del clima.";
    }
}

renderClima();
