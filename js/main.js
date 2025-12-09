document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.querySelector(".site-header");

  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }

    const video = document.getElementById("hero-video");
  const overlay = document.getElementById("hero-overlay");
  const playButton = document.getElementById("hero-play-button");

  if (video && overlay && playButton) {
    const introSrc = "../media/videos/VerticeTravelNarracion.mp4";
    const loopSrc = "../media/videos/VerticeTravelBucle.mp4";

    video.src = introSrc;
    video.loop = false;
    video.muted = false;

    function startIntro() {
      overlay.classList.add("is-hidden");
      video.currentTime = 0;
      video.play().catch(() => {});
    }