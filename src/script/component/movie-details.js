
class MovieDetails extends HTMLElement {

  set movDet(movDet) {
    this._movDet = movDet;
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


</style>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${this._movDet.Poster}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" id="movieTitleDetails">${this._movDet.Title}</h5>
    <p class="card-text">${this._movDet.Year}</p>
    <a href="#" class="btn btn-primary" id="buttonDetails">Details Movie</a>
  </div>
</div>`;
}

}
customElements.define("movie-details", MovieDetails );
