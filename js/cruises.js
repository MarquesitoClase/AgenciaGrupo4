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

  const heroStage = document.querySelector(".heroCruisesStage");
  const baseImage = document.querySelector(".heroBase");
  const activeImage = document.querySelector(".heroActive");
  const holdButton = document.getElementById("travelHoldButton");

  if (heroStage && baseImage && activeImage && holdButton) {
    const keys = [
      "cerdena",
      "fiordos",
      "inglaterra",
      "francia",
      "grecia",
      "tanger",
      "caribe",
    ];

    const images = {
      cerdena: "../media/images/cerdena.jpg",
      fiordos: "../media/images/fiordos.jpg",
      inglaterra: "../media/images/inglaterra.jpg",
      francia: "../media/images/francia.jpg",
      grecia: "../media/images/grecia.jpg",
      tanger: "../media/images/tanger.jpg",
      caribe: "../media/images/caribe.jpg",
    };

    let currentIndex = 0;
    let isHolding = false;
    let isTransitioning = false;
    let nextIndex = null;

    function startTransition(next) {
      if (isTransitioning) return;
      isTransitioning = true;

      activeImage.classList.remove("is-animating");
      activeImage.style.display = "block";
      activeImage.style.opacity = "1";
      activeImage.src = baseImage.src;
      activeImage.alt = baseImage.alt;

      baseImage.src = images[keys[next]];

      void activeImage.offsetWidth;

      nextIndex = next;
      activeImage.classList.add("is-animating");
    }

    activeImage.addEventListener("animationend", (event) => {
      if (event.animationName !== "heroPortal") return;

      activeImage.style.display = "none";
      activeImage.style.opacity = "0";
      activeImage.classList.remove("is-animating");

      if (nextIndex !== null) {
        currentIndex = nextIndex;
        nextIndex = null;
      }

      isTransitioning = false;

      if (isHolding) {
        const next = (currentIndex + 1) % keys.length;
        startTransition(next);
      }
    });

    function holdStart() {
      if (isHolding) return;
      isHolding = true;
      const next = (currentIndex + 1) % keys.length;
      startTransition(next);
    }

    function holdStop() {
      isHolding = false;
    }

    holdButton.addEventListener("mousedown", (event) => {
      event.preventDefault();
      holdStart();
    });
    holdButton.addEventListener("mouseup", holdStop);
    holdButton.addEventListener("mouseleave", holdStop);

    holdButton.addEventListener("touchstart", (event) => {
      event.preventDefault();
      holdStart();
    });
    holdButton.addEventListener("touchend", holdStop);

    heroStage.addEventListener("mousemove", (event) => {
      const rect = heroStage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      holdButton.style.left = `${x}px`;
      holdButton.style.top = `${y}px`;

      const mx = x / rect.width;
      const my = y / rect.height;

      const tiltX = (my - 0.5) * -8;
      const tiltY = (mx - 0.5) * 8;

      baseImage.style.transition = "transform 0.25s ease-out";
      baseImage.style.transform = `scale(1.03) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    heroStage.addEventListener("mouseleave", () => {
      holdButton.style.left = "50%";
      holdButton.style.top = "55%";

      baseImage.style.transition = "transform 0.3s ease-out";
      baseImage.style.transform = "scale(1.02) rotateX(0deg) rotateY(0deg)";
    });
  }

  const cruiseData = [
    {
      key: "fiordos",
      image: "../media/images/fiordos.jpg",
      alt: "Fiordo noruego con montañas nevadas",
      title: "Fiordos Noruegos",
      meta: "7 noches · salida desde Copenhague",
      text: "Ruta: Copenhague · Bergen · Geiranger · Hellesylt · Stavanger. Montañas infinitas, cascadas gigantes y una navegación única entre cañones naturales de hielo y roca.",
    },

    {
      key: "inglaterra",
      image: "../media/images/inglaterra.jpg",
      alt: "Acantilados de la costa inglesa",
      title: "Inglaterra Atlántica",
      meta: "5 noches · salida desde Bilbao",
      text: "Ruta: Southampton · Plymouth · Falmouth. Acantilados imponentes, faros históricos y puertos llenos de tradición marinera.",
    },

    {
      key: "francia",
      image: "../media/images/francia.jpg",
      alt: "Puerto en la costa francesa",
      title: "Costa Mediterránea Francesa",
      meta: "6 noches · salida desde Barcelona",
      text: "Ruta: Marsella · Toulon · Niza · Cannes. Calas de agua turquesa, paseos marítimos y puertos llenos de vida.",
    },

    {
      key: "cerdena",
      image: "../media/images/cerdena.jpg",
      alt: "Playa de arena blanca en Cerdeña",
      title: "Esencias de Cerdeña",
      meta: "7 noches · salida desde Barcelona",
      text: "Ruta: Olbia · Cagliari · Alghero · Costa Esmeralda. Aguas cristalinas y pueblos costeros llenos de carácter mediterráneo.",
    },

    {
      key: "grecia",
      image: "../media/images/grecia.jpg",
      alt: "Pueblo blanco en una isla griega",
      title: "Islas Griegas",
      meta: "8 noches · salida desde Valencia",
      text: "Ruta: Santorini · Mykonos · Creta · Rodas. Cúpulas azules, casas blancas y atardeceres sobre el mar Egeo.",
    },

    {
      key: "tanger",
      image: "../media/images/tanger.jpg",
      alt: "Playa cercana a Tánger",
      title: "Puerta a Tánger",
      meta: "4 noches · salida desde Málaga",
      text: "Ruta: Tánger · Tetuán. Fusión perfecta entre el Mediterráneo y la cultura del norte de África.",
    },

    {
      key: "caribe",
      image: "../media/images/caribe.jpg",
      alt: "Isla tropical en el Caribe",
      title: "Sueño Caribeño",
      meta: "10 noches · vuelo + crucero",
      text: "Ruta: República Dominicana · Bahamas · Jamaica. Playas de arena blanca, palmeras infinitas y aguas turquesa irreales.",
    },

    {
      key: "mediterraneoClasico",
      image: "../media/images/europa3.jpg",
      alt: "Costa mediterránea al atardecer",
      title: "Mediterráneo Clásico",
      meta: "7 noches · salida desde Barcelona",
      text: "Ruta: Barcelona · Civitavecchia (Roma) · Nápoles · Palermo. Historia, gastronomía y ciudades icónicas del Mediterráneo.",
    },
    {
      key: "canariasMadeira",
      image: "../media/images/africa2.jpg",
      alt: "Acantilado volcánico en una isla atlántica",
      title: "Islas Canarias y Madeira",
      meta: "9 noches · salida desde Cádiz",
      text: "Ruta: Lanzarote · Las Palmas · Tenerife · Funchal. Sol de invierno, paisajes volcánicos y bosques de laurisilva.",
    },
    {
      key: "capitalesBalticas",
      image: "../media/images/europa5.jpg",
      alt: "Ciudad histórica a orillas del mar Báltico",
      title: "Capitales Bálticas",
      meta: "8 noches · vuelo + crucero",
      text: "Ruta: Estocolmo · Helsinki · Tallin · Riga. Arquitectura imperial, barrios históricos y cultura nórdica junto al Báltico.",
    },
    {
      key: "norteEuropa",
      image: "../media/images/europa2.jpg",
      alt: "Paisaje del norte de Europa con montañas y mar",
      title: "Norte de Europa",
      meta: "10 noches · salida desde Ámsterdam",
      text: "Ruta: Ámsterdam · Brujas · Hamburgo · Oslo. Ciudades portuarias llenas de historia y canales que miran al mar del Norte.",
    },
    {
      key: "adriatico",
      image: "../media/images/europa4.jpg",
      alt: "Ciudad amurallada frente al mar Adriático",
      title: "Adriático y Dubrovnik",
      meta: "7 noches · salida desde Venecia",
      text: "Ruta: Split · Hvar · Kotor · Dubrovnik. Murallas sobre el mar, calas escondidas y pequeñas ciudades de piedra.",
    },
    {
      key: "egiptoNilo",
      image: "../media/images/africa4.jpg",
      alt: "Templos junto al río en un paisaje desértico",
      title: "Egipto y Nilo",
      meta: "9 noches · vuelo + crucero fluvial",
      text: "Ruta: El Cairo · Luxor · Asuán. Templos milenarios, navegación por el Nilo y amaneceres entre desiertos y palmerales.",
    },
    {
      key: "japonCorea",
      image: "../media/images/asia3.jpg",
      alt: "Ciudad costera iluminada en Asia",
      title: "Japón y Corea en el mar",
      meta: "12 noches · vuelo + crucero",
      text: "Ruta: Tokio · Osaka · Busan · Jeju. Ciudades futuristas, templos tradicionales y puertos llenos de neones frente al Pacífico.",
    },
    {
      key: "auroras",
      image: "../media/images/europa6.jpg",
      alt: "Paisaje ártico con auroras boreales",
      title: "Auroras en el Ártico",
      meta: "11 noches · salida desde Tromsø",
      text: "Ruta: Tromsø · Alta · Honningsvåg · islas Lofoten. Navegación polar, noches boreales y pequeños pueblos pesqueros.",
    },
    {
      key: "atlanticoSur",
      image: "../media/images/america3.jpg",
      alt: "Costa atlántica con acantilados y océano",
      title: "Atlántico Sur y Lisboa",
      meta: "8 noches · salida desde Lisboa",
      text: "Ruta: Lisboa · Madeira · Tenerife · Lanzarote. Ciudades atlánticas con miradores infinitos y clima suave todo el año.",
    },
  ];

  const grid = document.getElementById("cruiseDestinationsGrid");

  if (grid) {
    cruiseData.forEach((cruise) => {
      const li = document.createElement("li");
      li.className = "cruiseDestinationCard";

      li.innerHTML = `
        <figure class="cruiseDestinationImageWrapper">
          <img src="${cruise.image}" alt="${cruise.alt}" class="cruiseDestinationImage">
        </figure>
        <article class="cruiseDestinationBody">
          <h2 class="cruiseDestinationTitle">${cruise.title}</h2>
          <p class="cruiseDestinationMeta">${cruise.meta}</p>
          <p class="cruiseDestinationText">
            ${cruise.text}
          </p>
        </article>
      `;

      grid.appendChild(li);
    });
  }
});
