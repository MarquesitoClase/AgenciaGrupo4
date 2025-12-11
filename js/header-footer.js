class HeaderComponent extends HTMLElement {
  connectedCallback() {
    fetch("../html/header.html")
      .then((res) => res.text())
      .then((html) => {
        this.innerHTML = html;
        const navToggle = this.querySelector(".nav-toggle");
        const navLinks = this.querySelector(".nav-links");

        if (navToggle && navLinks) {
          navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("is-open");
          });
        }
      });
  }
}
customElements.define("my-header", HeaderComponent);
class FooterComponent extends HTMLElement {
  connectedCallback() {
    fetch("../html/footer.html")
      .then((res) => res.text())
      .then((html) => (this.innerHTML = html));
  }
}
customElements.define("my-footer", FooterComponent);