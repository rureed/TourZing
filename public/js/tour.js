$(document).ready(function () {


    // Getting references to our form and inputs
    const tourSignUpForm = $("form.tourSignUp");
    const guideFirstNameInput = $("input#guideFirstName");
    const guideLastNameInput = $("input#guideLastName");
    const tourInput = $("input#tour");
    const cardInput = $("input#creditcard");

    // When the signup button is clicked, we validate the name, email and password are not blank
    tourSignUpForm.on("submit", function (event) {
        event.preventDefault();
        let userData = {
            guideFirstName: guideFirstNameInput.val().trim(),
            guideLastName: guideLastNameInput.val().trim(),
            tour: tourInput.val().trim(),
            creditcard: cardInput.val().trim()
        };

        if (!userData.guideFirstName ||!userData.guideLastName || !userData.tour || !userData.creditcard) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userDate.guideFirstName, userDate.guideLastName, userData.tour, userData.creditcard);
        guideFirstNameInput.val("");
        guideLastNameInput.val("");
        tourInput.val("");
        creditcardInput.val("");
    });

    /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(guideFirstName, guideLastName, tour, creditcard) {
    $.post("/tour/signup", {
      guideFirstName: guideFirstName,
      guideLastName: guideLastName,
      tour: tour,
      creditcard: creditcard
    })
      .then(function(data) {
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