class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    this.render();
  }

  render() {

  }
}

customElements.define("movie-list", MovieList);
