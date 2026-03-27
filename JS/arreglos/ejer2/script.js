const estudiantes = [
    ["juan",10,8,9],
    ["maria",9,7,8],
    ["pedro",8,9,10],
    ["ana",7,8,9]
]

let html = "";

for (let estudiante of estudiantes) {
    html += `<p>`
    for (let dato of estudiante) {
        html += `${dato} `
    }
    html += `</p>`
}
document.getElementById("notas").innerHTML = html;