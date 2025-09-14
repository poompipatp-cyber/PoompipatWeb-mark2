class MainNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const [navbarHtml, styleCss] = await Promise.all([
      fetch('/components/navbar.html').then(response => response.text()),
      fetch('/styles/style.css').then(response => response.text())
    ]);

    this.shadowRoot.innerHTML = `
      <style>
        ${styleCss}
      </style>
      ${navbarHtml}
    `;

    const toggleButton = this.shadowRoot.querySelector('.navbar-toggle');
    const linksContainer = this.shadowRoot.querySelector('.navbar-links-container');

    toggleButton.addEventListener('click', () => {
      linksContainer.classList.toggle('active');
    });
  }
}

customElements.define('main-navbar', MainNavbar);
