/*/ SCRIPT FOR HOTELS WEBPAGE /*/
/*/ VARIABLES /*/
let jsonFilePath = "../json/hotels.json";
let jsonFilePathImages = "../media/images/hotels";
let node = document.getElementById("hotelCards");

function loadJson() {
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(json) {
    let content = json.hotels.map(createHotelCards).join('');
    node.innerHTML = content;
}

function createHotelCards({ id, name, country, city, category, rating, userRating, countRating, locationDescription, tags, price, image }) {
    return `
    <div class="cardHotels">
        <div>
            <img class="hotelImage" src=${jsonFilePathImages}/${image}>
        </div>
        <div>
            <p class="hotelName">${name}</p>
        </div>
        <div class="description">
            <p class="hotelCategory">${category}</p>
            <p class="hotelRating">${rating}</p>
            <p class="hotelUserRating">${userRating}</p>
            <p class="hotelCountRating">${countRating} comentarios</p>
        </div>
        <div class="description">
            <p class="hotelLocation">📌${city}, ${locationDescription}</p>
        </div>
        <div class="description">
            <p class="hotelTags">${tags[0].unchecked}</p>
        </div>
        <div class="description">
            <p class="hotelTags">✔ ${tags[0].checked}</p>
        </div>
        <div class="price">
            <p class="hotelPriceOriginal">${price.original}</p>
            <p class="hotelPriceOffer">${price.offer}</p>            
            <p class="hotelPriceMessage">${price.message}</p>
        </div>
    </div>
    `
}

loadJson();

/*/ CARDS MANAGEMENT /*/

function jsonSortingCards(filter) {
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(json => sort(json, filter))
}

function sort(jsonData, filter) {
    let sortCards = jsonData.hotels.sort((a, b) => {
        if (filter == 'precio')
            return parseInt(a.price.offer) - parseInt(b.price.offer);
        else if (filter == 'ciudad')
            return a.city > b.city ? 1 : -1;
        else if(filter == 'puntuacion')
            return a.rating - b.rating;
        else if(filter == 'comentarios')
            return a.countRating - b.countRating;
        else if(filter == 'categoria')
            return a.category.length - b.category.length;
    });

    let result = { "hotels": sortCards };

    displayMessage(filter);
    setTimeout(function () {
        displayData(result);
        removeMessage();
    }, 2000);
}

function displayMessage(filter) {
    let body = document.getElementsByTagName("body")[0];
    let node = document.createElement("p");
    node.classList.add("message");
    node.innerHTML = `
        Ordenando tarjetas por ${filter}...
    `
    body.appendChild(node);
}

function removeMessage() {
    document.getElementsByClassName("message")[0].remove();
}

/*/ IMPORTING HEADER.HTML FILE /*/

let URLHeader = "header.html";

class MiHeader extends HTMLElement {
    connectedCallback() {
        fetch(URLHeader)
            .then(r => r.text())
            .then(html => this.innerHTML = html);
    }
}

customElements.define("my-header", MiHeader);