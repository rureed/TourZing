$(document).ready(function () {


  // Getting references to our form and inputs
  const tourSignUpForm = $("form.tourSignUp");
  const guideFirstNameInput = $("input#guideFirstName");
  const guideLastNameInput = $("input#guideLastName");
  const tourInput = $("input#tour");
  const creditcardInput = $("input#creditcard");
  const tourDateInput = $("input#date");
  const phoneInput = $("input#phone");

  // When the signup button is clicked, we validate the name, email and password are not blank
  tourSignUpForm.on("submit", function (event) {
    event.preventDefault();
    let userData = {
      guideFirstName: guideFirstNameInput.val().trim(),
      guideLastName: guideLastNameInput.val().trim(),
      tour: tourInput.val().trim(),
      creditcard: creditcardInput.val().trim(),
      tourDate: tourDateInput.val().trim(),
      phone: phoneInput.val().trim()
    };

    if (!userData.guideFirstName || !userData.guideLastName || !userData.tour || !userData.creditcard
      || !tourDate || !phone) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.guideFirstName, userData.guideLastName, userData.tour, userData.creditcard,
      userData.tourDate, userData.phone);
    guideFirstNameInput.val("");
    guideLastNameInput.val("");
    tourInput.val("");
    creditcardInput.val("");
    tourDateInput.val("");
    phoneInput.val("");

  });

  /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(guideFirstName, guideLastName, tour, creditcard, tourDate, phone) {
    $.post("/tour/signup", {
      guideFirstName: guideFirstName,
      guideLastName: guideLastName,
      tour: tour,
      creditcard: creditcard,
      tourData: tourData,
      phone: phone
    })
      .then(function (data) {
        window.location.replace("/account");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }


});