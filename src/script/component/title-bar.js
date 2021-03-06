class TitleBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode:"open"});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    </style>
    <nav class="navbar navbar-light bg-primary text-white">
      <a class="navbar-brand text-white" href="http://www.dicoding.com">
        MoviePedia
      </a>
    </nav>
    `;
  }
}

customElements.define("title-bar", TitleBar);
