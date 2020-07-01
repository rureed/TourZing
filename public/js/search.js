// const db = require("../../models");

$(document).ready(function () {

  // $.get("/guide/search").then(function (data) {
  //   $(".well").append(data)
    //  });
    // call the /api/guide
    // get the result
    // jquery get the eelemtns and show the info

  getNames();

  async function getNames() {
    const response = await fetch('/guide/search');
    const data = await response.json();
    console.log(data);

    $('.well').html(data)
  }


  // });


});

