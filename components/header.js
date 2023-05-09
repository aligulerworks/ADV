const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link rel="stylesheet" href="${styleDirectory}style.css" />

<header class="header">
<div class="header-title">
  <h2><a href="${styleDirectory}">ali güler works</a></h2>
</div>
<div class="header-line"></div>
<div class="header-subtitle">
  <h6 class="header-subtitle-left">Personal</h6>
  <div class="header-sub-triangle"></div>
  <h6 class="header-subtitle-right">Portfolio</h6>
</div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
