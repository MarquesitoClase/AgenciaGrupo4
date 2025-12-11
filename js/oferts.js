const jsonRute = "../json/oferts.json";

let ofertsView = document.getElementById('tablaOfertas');

fetch(jsonRute)
    .then(response => {
        if(!response.ok){
            throw new Error('the Json was not founded');
        }
        return response.json();
    })
    .then(data => {
        mostrarOfertas(data.ofertas);
    })
    .catch(error => {
        console.error("Error:", error);
        ofertsView.innerHTML = `<p>Error al cargar las ofertas.</p>`;
    });

function mostrarOfertas(oferts) {
    let tbody = ofertsView.querySelector("tbody");

    oferts.forEach(oferta => {
        let fila = document.createElement("tr");

        fila.innerHTML= `
        <td>${oferta.destino}</td>
        <td>${oferta.precio}</td>
        <td>${oferta.begin_date}</td>
        <td>${oferta.end_date}</td>
        `

        tbody.appendChild(fila);
    });

}