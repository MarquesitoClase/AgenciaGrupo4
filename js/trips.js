document.addEventListener("DOMContentLoaded", () => {
  const tripGrid = document.getElementById("tripGrid");
  const filterButtons = document.querySelectorAll(".trip-filter");

  // DATOS DE VIAJES (PUEDES CAMBIAR TEXTOS E IMÁGENES)
  const trips = [
    {
      id: "japon-romantico",
      type: ["pareja", "larga-distancia"],
      title: "Japón romántico: Tokio, Kioto y Hakone",
      image: "../media/images/asia3.jpg",
      alt: "Ciudad japonesa junto a un lago y montañas",
      location: "Tokio · Kioto · Hakone",
      duration: "12 días · 9 noches",
      description:
        "Un recorrido pensado para dos: templos, barrios tradicionales, baños onsen y hoteles boutique con vistas espectaculares.",
      priceFrom: "3.200 €",
      tags: ["En pareja", "Cultura", "Trenes bala"],
    },
    {
      id: "costa-oeste-familia",
      type: ["familia", "aventura", "larga-distancia"],
      title: "Costa Oeste en familia",
      image: "../media/images/america3.jpg",
      alt: "Carretera junto a un lago entre montañas",
      location: "San Francisco · Yosemite · Los Ángeles",
      duration: "14 días · 11 noches",
      description:
        "Ruta flexible en coche con niños: parques nacionales, ciudades icónicas y tiempo para disfrutar sin prisas.",
      priceFrom: "2.850 €",
      tags: ["En familia", "Roadtrip", "Parques nacionales"],
    },
    {
      id: "islandia-auroras",
      type: ["aventura", "larga-distancia"],
      title: "Islandia y auroras boreales",
      image: "../media/images/europa6.jpg",
      alt: "Paisaje nevado con montañas y lago",
      location: "Reikiavik · Círculo Dorado · Costa Sur",
      duration: "8 días · 6 noches",
      description:
        "Cascadas, géiseres, paisajes volcánicos y salidas nocturnas en busca de auroras boreales con guías expertos.",
      priceFrom: "1.780 €",
      tags: ["Aventura", "Naturaleza", "Invierno"],
    },
    {
      id: "roma-venecia",
      type: ["pareja", "familia"],
      title: "Roma y Venecia a tu ritmo",
      image: "../media/images/europa3.jpg",
      alt: "Ciudad europea a orillas de un lago",
      location: "Roma · Venecia",
      duration: "7 días · 5 noches",
      description:
        "Un clásico europeo con hoteles céntricos, visitas guiadas opcionales y tiempo libre para perderse por sus calles.",
      priceFrom: "980 €",
      tags: ["City break", "Europa", "Gastronomía"],
    },
    {
      id: "nueva-york-escapada",
      type: ["pareja", "aventura", "larga-distancia"],
      title: "Escapada a Nueva York",
      image: "../media/images/america8.jpg",
      alt: "Parque urbano con lago y rascacielos",
      location: "Manhattan · Brooklyn",
      duration: "6 días · 4 noches",
      description:
        "Ideal como primera vez en la ciudad: vuelos, hotel bien situado y recomendaciones de rutas por barrios.",
      priceFrom: "1.250 €",
      tags: ["Gran ciudad", "Shopping", "Cultura urbana"],
    },
    {
      id: "caribe-relax",
      type: ["pareja", "familia", "larga-distancia"],
      title: "Caribe todo incluido",
      image: "../media/images/caribe.jpg",
      alt: "Isla tropical de arena blanca y mar turquesa",
      location: "Riviera Maya o República Dominicana",
      duration: "9 días · 7 noches",
      description:
        "Playas de arena blanca, resorts frente al mar y la posibilidad de añadir excursiones a ruinas mayas o cenotes.",
      priceFrom: "1.390 €",
      tags: ["Sol y playa", "Todo incluido", "Relax"],
    },
    {
      id: "londres-familia",
      type: ["familia"],
      title: "Londres para familias",
      image: "../media/images/europa5.jpg",
      alt: "Lago de montaña al atardecer",
      location: "Londres",
      duration: "5 días · 4 noches",
      description:
        "Museos gratuitos, parques, paseo por el Támesis y actividades pensadas para niños y adolescentes.",
      priceFrom: "790 €",
      tags: ["En familia", "Museos", "City break"],
    },
    {
      id: "canada-naturaleza",
      type: ["aventura", "larga-distancia"],
      title: "Parques de Canadá en coche",
      image: "../media/images/america25.jpg",
      alt: "Lago y montañas nevadas en América",
      location: "Calgary · Banff · Jasper",
      duration: "12 días · 10 noches",
      description:
        "Una ruta panorámica entre lagos turquesa, montañas infinitas y carreteras escénicas para amantes de la naturaleza.",
      priceFrom: "2.450 €",
      tags: ["Roadtrip", "Naturaleza", "Montaña"],
    },