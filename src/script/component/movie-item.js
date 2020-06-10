class MovieItem extends HTMLElement {

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get value() {
    return this.querySelector("#movieTitleDetails").value;
  }

  render() {
    this.innerHTML = `
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <style>
    * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 :host {
     display: block;
     margin-bottom: 18px;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
     border-radius: 10px;
     overflow: hidden;
 }
 .card {
   margin: 10px 10px;
 }

 .btn{
   background-color: blue;
   color: white;
 }


</style>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${this._movie.Poster}" alt="${this._movie.Title}">
  <div class="card-body">
    <h5 class="card-title" id="movieTitleDetails">${this._movie.Title}</h5>
    <p class="card-text">${this._movie.Year}</p>
    <button class="btn btn-outline-success my-2 my-sm-0" id="buttonDetails" type="submit">Details Movie</button>
  </div>
</div>`;

this.querySelector("#buttonDetails").addEventListener("click", this._clickEvent);
  }
}

customElements.define("movie-item", MovieItem);
