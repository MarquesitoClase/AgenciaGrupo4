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