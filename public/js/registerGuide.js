$(document).ready(function () {

    // Getting references to our form and inputs
    const signUpForm = $("form.signup");
    const firstNameInput = $("input#firstName")
    const lastNameInput = $("input#lastName")
    const emailInput = $("input#email");
    const passwordInput = $("input#password");
    const phoneInput = $("input#phone");
    const countryInput = $("input#country");
    const cityInput = $("input#city");
    const tourInput = $("input#tour");
    const costInput = $("input#cost");

    // When the signup button is clicked, we validate the name, email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        let guideData = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            phone: phoneInput.val().trim(),
            country: countryInput.val().trim(),
            city: cityInput.val().trim(),
            tour: tourInput.val().trim(),
            cost: costInput.val().trim()
        };

        if (!guideData.firstName || !guideData.lastName || !guideData.email || !guideData.password ||
            !guideData.phone || !guideDate.country || !guideData.city || !guideData.tour || !guideData.cost) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpGuide(guideData.firstName, guideData.lastName, guideData.email, guideData.password, guideData.phone,
            guideData.country, guideData.city, guideData.tour, guideData.cost);
        firstNameInput.val("");
        lastNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        phoneInput.val("");
        countryInput.val("");
        cityInput.val("");
        tourInput.val("");
        costInput.val("");
    });

    /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpGuide(firstName, lastName, email, password, phone, country, city, tour, cost) {
    $.post("/guide/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      country: country,
      city: city,
      tour: tour,
      cost: cost
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

})