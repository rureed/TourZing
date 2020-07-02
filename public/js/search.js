// const db = require("../../models");

$(document).ready(function () {

  // $.get("/guide/search").then(function (data) {
  //   $(".well").append(data)
  //  });
  // call the /api/guide
  // get the result
  // jquery get the eelemtns and show the info

  
  $("#searchLocation").on('click', function() {
    let city = $("#search").val()
    $.get("/guide/search/"+ city).then(function (data) {
      console.log(data);
      
      $('.well').html(data)
    })
  })
  


  // });


});

