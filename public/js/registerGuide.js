$(document).ready(function () {

    // Getting references to our form and inputs
    const signUpForm = $("form.signup");
    const guideFirstNameInput = $("input#firstName")
    const guideLastNameInput = $("input#lastName")
    const emailInput = $("input#email");
    const passwordInput = $("input#password");
    const guidePhoneInput = $("input#phone");
    const cityInput = $("input#city");

    // When the signup button is clicked, we validate the name, email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        let userData = {
           firstName: guideFirstNameInput.val().trim(),
            lastName: guideLastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            phone: guidePhoneInput.val().trim(),
            city: cityInput.val().trim(),
            
        };

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password ||
            !userData.phone || !userData.city) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpGuide(userData.firstName, userData.lastName, userData.email, 
          userData.password, userData.phone, userData.city);
        guideFirstNameInput.val("");
        guideLastNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        guidePhoneInput.val("");
        cityInput.val("");
    });

    /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpGuide(firstName, lastName, email, password, phone, city) {
    $.post("/guide/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      city: city,
    })
      .then(function(data) {
        window.location.replace("/guideAccount");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
      }

})