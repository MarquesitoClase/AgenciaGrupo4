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