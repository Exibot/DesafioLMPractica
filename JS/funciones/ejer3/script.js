document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        container = document.getElementById("container");
        let parrafo = document.createElement("p");
        parrafo.textContent = "Has pulsado la letra a";
        container.appendChild(parrafo);
    }
    if (event.key === "d") {
        container = document.getElementById("container");
        container.lastChild.remove();
    }
});
