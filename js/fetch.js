const jsonRute = "../media/data/oferts.json";

let ofertsView = document.getElementById('ofertsView');

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