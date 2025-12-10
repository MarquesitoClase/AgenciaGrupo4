document.addEventListener("DOMContentLoaded", chargeOferts);
let place = document.getElementById("ofertsView");

let card = document.createElement("div");
card.classList.add('card');

let offerts = [{
      key: "cerdena",
      image: "../media/images/cerdena.jpg",
      alt: "Playa de arena blanca en Cerdeña",
      title: "Esencias de Cerdeña",
      meta: "7 noches · salida desde Barcelona",
      text: "Ruta: Olbia · Cagliari · Alghero · Costa Esmeralda. Aguas cristalinas y pueblos costeros llenos de carácter mediterráneo.",
      price: 50,
      moneda: "euros"
    },
]
function chargeOferts() {
  const container = document.getElementById('oferts-container');
  container.innerHTML = '';

  offerts.forEach(oferta => {
    container.innerHTML += `
      <article class="ofertCard">
        <img src="${oferta.image}" alt="${oferta.alt}">
        <h3>${oferta.title}</h3>
        <p class="meta">${oferta.meta}</p>
        <p class="text">${oferta.text}</p>
        <p class="price">${oferta.price} ${oferta.moneda}</p>
      </article>
    `;
  });
}
