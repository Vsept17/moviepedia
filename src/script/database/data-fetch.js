
class DataFetch {
  static searchMovie(keyword) {
    return fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=286a633a`)

      .then(response => {
        return response.json()
      })

      .then(responseJson => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan`)
        }
      })
      var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=ddea4ed75be12f2242a49384e39dd4cbf1590936624");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`http://www.omdbapi.com/?t=${keyword}&apikey=286a633a`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  };

}

export default DataFetch;
