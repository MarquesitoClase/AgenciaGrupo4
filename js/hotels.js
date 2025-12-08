let filepath = "../json/hotels.json";
let filepathImages = "../media/images/hotels";
let node = document.getElementById("hotelCards");

function loadJson() {
    fetch(filepath)
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(json) {
    let content = json.hotels.map(createHotelCards).join('');
    node.innerHTML = content;
}

function createHotelCards({ id, name, country, city, category, rating, userRating, countRating, locationDescription, tags, price, image }) {
    return `
    <div class="card">
        <div>
            <img class="hotelImage" src=${filepathImages}/${image}>
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