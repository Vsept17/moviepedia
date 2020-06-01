class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-light bg-light">
    <h2>Search Movie: </h2>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search by Title" aria-label="Search">
        <input class="form-control mr-sm-2" type="search" placeholder="Search by Year" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
    </body>

    `;
  }
}

customElements.define("search-bar", SearchBar);
