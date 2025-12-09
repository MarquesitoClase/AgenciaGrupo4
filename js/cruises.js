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