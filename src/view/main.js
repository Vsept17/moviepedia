import '../script/component/movie-list.js';
import '../script/component/search-bar.js';
import DataFetch from '../script/database/data-fetch.js';


const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataFetch.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message)
    }
  };

  const renderResult = results => {
    movieElement.movies = results;
    };

    const fallbackResult = message => {
      movieElement.renderError(message);

  };

  searchElement.clickEvent = onButtonSearchClicked;


};



export default main;
