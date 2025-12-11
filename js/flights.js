document.addEventListener("DOMContentLoaded", () => {
    const siteHeader = document.querySelector(".site-header");

    if (siteHeader) {
        function handleScroll() {
            if (window.scrollY > 10) {
                siteHeader.classList.add("scrolled");
            } else {
                siteHeader.classList.remove("scrolled");
            }
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
    }

    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("is-open");
        });
    }

    const flightOffers = [
        {
            key: "bcn-tokio",
            image: "../media/images/asia3.jpg",
            alt: "Lago azul profundo rodeado de altas montañas en Asia",
            from: "Barcelona (BCN)",
            to: "Tokio (HND)",
            duration: "aprox. 15 h con escala",
            airline: "Emirates · Qatar · Turkish",
            priceFrom: "890 €",
            badge: "Larga distancia",
            pills: ["1 escala cómoda", "Equipaje facturado", "Asistencia 24/7"],
        },
        {
            key: "madrid-nyc",
            image: "../media/images/america3.jpg",
            alt: "Lago azul intenso entre montañas en América del Norte",
            from: "Madrid (MAD)",
            to: "Nueva York (JFK)",
            duration: "aprox. 8 h directo",
            airline: "Iberia · Air Europa",
            priceFrom: "620 €",
            badge: "Directo",
            pills: ["Vuelo directo", "Elección de asiento", "Check-in online"],
        },
        {
            key: "bcn-reykjavik",
            image: "../media/images/europa6.jpg",
            alt: "Montañas nevadas reflejadas en un lago tranquilo",
            from: "Barcelona (BCN)",
            to: "Reikiavik (KEF)",
            duration: "aprox. 6 h con escala",
            airline: "Icelandair · Lufthansa",
            priceFrom: "410 €",
            badge: "Invernal",
            pills: [
                "Escala corta",
                "Mejor en invierno",
                "Excursiones de auroras",
            ],
        },
        {
            key: "madrid-cancun",
            image: "../media/images/caribe.jpg",
            alt: "Isla tropical con playas de arena blanca y mar turquesa",
            from: "Madrid (MAD)",
            to: "Cancún (CUN)",
            duration: "aprox. 10 h directo",
            airline: "Iberojet · Air Europa",
            priceFrom: "780 €",
            badge: "Caribe",
            pills: ["Vuelo directo", "Ideal luna de miel", "Opción todo incluido"],
        },
        {
            key: "bcn-atenas",
            image: "../media/images/grecia.jpg",
            alt: "Pueblo blanco y azul sobre el mar Egeo",
            from: "Barcelona (BCN)",
            to: "Atenas (ATH)",
            duration: "aprox. 3 h 5 min",
            airline: "Aegean Airlines · Vueling",
            priceFrom: "160 €",
            badge: "Europa",
            pills: ["Vuelo directo", "Escapada corta", "Disponible todo el año"],
        },
        {
            key: "sevilla-paris",
            image: "../media/images/francia.jpg",
            alt: "Costa francesa con puerto y mar en calma",
            from: "Sevilla (SVQ)",
            to: "París (CDG)",
            duration: "aprox. 2 h 30 min",
            airline: "Air France · Vueling",
            priceFrom: "140 €",
            badge: "Escapada",
            pills: ["City break", "Fin de semana", "Ideal parejas"],
        },
        {
            key: "valencia-dublin",
            image: "../media/images/europa13.jpg",
            alt: "Colinas verdes con pueblo europeo al fondo",
            from: "Valencia (VLC)",
            to: "Dublín (DUB)",
            duration: "aprox. 3 h 10 min",
            airline: "Ryanair",
            priceFrom: "95 €",
            badge: "Verde",
            pills: ["Clima fresco", "Pubs y música", "Paisajes rurales"],
        },
        {
            key: "madrid-lisboa",
            image: "../media/images/europa5.jpg",
            alt: "Lago de montaña al atardecer con cielo anaranjado",
            from: "Madrid (MAD)",
            to: "Lisboa (LIS)",
            duration: "aprox. 1 h 15 min",
            airline: "TAP · Iberia",
            priceFrom: "79 €",
            badge: "Cercano",
            pills: ["Vuelo corto", "Miradores atlánticos", "Gastronomía local"],
        },
        {
            key: "bcn-islasCanarias",
            image: "../media/images/oceania1.jpg",
            alt: "Ensenada con playas curvas y mar azul intenso",
            from: "Barcelona (BCN)",
            to: "Tenerife (TFN)",
            duration: "aprox. 3 h 15 min",
            airline: "Vueling · Binter",
            priceFrom: "89 €",
            badge: "Sol todo el año",
            pills: ["Islas volcánicas", "Playas", "Clima suave"],
        },
        {
            key: "madrid-madeira",
            image: "../media/images/oceania12.jpg",
            alt: "Montañas y lagos en paisaje atlántico",
            from: "Madrid (MAD)",
            to: "Funchal (FNC)",
            duration: "aprox. 2 h 15 min",
            airline: "TAP Air Portugal",
            priceFrom: "130 €",
            badge: "Isla atlántica",
            pills: ["Acantilados", "Senderismo", "Clima templado"],
        },
        {
            key: "madrid-saoPaulo",
            image: "../media/images/america8.jpg",
            alt: "Parque nacional con lagos y montañas nevadas",
            from: "Madrid (MAD)",
            to: "São Paulo (GRU)",
            duration: "aprox. 11 h",
            airline: "Iberia · LATAM",
            priceFrom: "690 €",
            badge: "Latinoamérica",
            pills: ["Vuelo largo", "Equipaje incluido", "Conexión con Brasil"],
        },
        {
            key: "bcn-dubai",
            image: "../media/images/asia10.jpg",
            alt: "Costa rocosa con mar azul intenso en Asia",
            from: "Barcelona (BCN)",
            to: "Dubái (DXB)",
            duration: "aprox. 6 h 30 min",
            airline: "Emirates",
            priceFrom: "460 €",
            badge: "Premium",
            pills: ["Meal service", "Entretenimiento a bordo", "1 pieza equipaje"],
        },
        {
            key: "madrid-bangkok",
            image: "../media/images/asia7.jpg",
            alt: "Lago turquesa entre montañas en Asia",
            from: "Madrid (MAD)",
            to: "Bangkok (BKK)",
            duration: "aprox. 13 h con escala",
            airline: "Qatar · Emirates · Turkish",
            priceFrom: "720 €",
            badge: "Asia",
            pills: ["1 escala", "Clima tropical", "Ideal mochileros"],
        },
        {
            key: "bcn-reykjavikInvierno",
            image: "../media/images/europa2.jpg",
            alt: "Lago alpino azul rodeado de bosque de coníferas",
            from: "Barcelona (BCN)",
            to: "Reikiavik (KEF)",
            duration: "aprox. 6 h",
            airline: "Icelandair",
            priceFrom: "430 €",
            badge: "Auroras",
            pills: ["Mejor en invierno", "Rutas de nieve", "Paisajes polares"],
        },
        {
            key: "lisboa-rio",
            image: "../media/images/portugal.avif",
            alt: "Costa rocosa con mar azul profundo",
            from: "Lisboa (LIS)",
            to: "Río de Janeiro (GIG)",
            duration: "aprox. 10 h 30 min",
            airline: "TAP Air Portugal",
            priceFrom: "710 €",
            badge: "Atlántico Sur",
            pills: ["Vuelo directo", "Playas icónicas", "Clima cálido"],
        },
    ];

    const grid = document.getElementById("flightOffersGrid");

    if (grid) {
        flightOffers.forEach((offer) => {
            const li = document.createElement("li");
            li.className = "flightCard";

            const pillsHtml = offer.pills
                .map((pill) => `<span class="flightPill">${pill}</span>`)
                .join("");

            li.innerHTML = `
        <figure class="flightCardImageWrapper">
          <img
            src="${offer.image}"
            alt="${offer.alt}"
            class="flightCardImage"
          />
          <span class="flightCardBadge">${offer.badge}</span>
        </figure>
        <article class="flightCardBody">
          <p class="flightRoute">${offer.from} → ${offer.to}</p>
          <p class="flightMeta">${offer.duration}</p>
          <p class="flightAirline">${offer.airline}</p>

          <div class="flightPriceRow">
            <span class="flightPriceLabel">Desde</span>
            <span class="flightPriceValue">${offer.priceFrom}</span>
          </div>

          <div class="flightPillRow">
            ${pillsHtml}
          </div>
        </article>
      `;

            grid.appendChild(li);
        });
    }
});
