

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=1200299230a54093ab0bd9a12413d913';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })