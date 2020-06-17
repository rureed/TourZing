$(document).ready(function () {
  $("#searchLocation").on("click", function () {
    SearchPhotos();
  });

  function SearchPhotos() {
    let clientId = "byWUyEcKwDhQoylDG6mzMVIUIMGJMhkOBvN2UnhJea0";
    let query = document.getElementById("search").value;

    let url =
      "https://api.unsplash.com/search/photos/?client_id=" +
      clientId +
      "&query=" +
      query;

    // make request to animationPlayState:
    fetch(url)
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);

        data.results.forEach((photo) => {
          let result = `
                <img src="${photo.urls.regular}">
                <a href="${photo.links.download}">
        
            `;

          // document.getElementById("result").innerHTML(result);

          $("#result").html(result);
        });
      });
  }
});
