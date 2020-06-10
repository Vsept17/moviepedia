import './movie-details.js';
class MovielisDetail extends HTMLElement {
set movieDetail(movieDetail) {
  this._movieDetail = movieDetail;
  this.render();
}

render() {
  this.innerHTML = "";
  this._movieDetail.forEach(movDet => {
    const movieDetailsElement = document.createElement("movie-details");
    movieDetailsElement.movDet = movDet
    this.appendChild(movieDetailsElement);
  })
}

renderError(message) {
  this.innerHTML = `
  <style>
           .placeholder {
                 font-weight: lighter;
                 color: rgba(0,0,0,0.5);
                 -webkit-user-select: none;
                 -moz-user-select: none;
                 -ms-user-select: none;
                 user-select: none;
             }
      </style>
  `;
  this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
}
}

}
customElements.define("movielist-detail", MovielistDetail);
