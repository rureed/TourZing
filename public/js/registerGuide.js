$(document).ready(function () {

    // Getting references to our form and inputs
    const signUpForm = $("form.signup");
    const guideFirstNameInput = $("input#guideFirstName")
    const guideLastNameInput = $("input#guideLastName")
    const emailInput = $("input#email");
    const passwordInput = $("input#password");
    const guidePhoneInput = $("input#guidePhone");
    const cityInput = $("input#city");

    // When the signup button is clicked, we validate the name, email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        let guideData = {
            guideFirstName: guideFirstNameInput.val().trim(),
            guideLastName: guideLastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            guidePhone: guidePhoneInput.val().trim(),
            city: cityInput.val().trim(),
            
        };

        if (!guideData.guideFirstName || !guideData.guideLastName || !guideData.email || !guideData.password ||
            !guideData.guidePhone || !guideData.city) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpGuide(guideData.guideFirstName, guideData.guideLastName, guideData.email, 
          guideData.password, guideData.guidePhone, guideData.city);
        guideFirstNameInput.val("");
        guideLastNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        guidePhoneInput.val("");
        cityInput.val("");
    });

    /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpGuide(guideFirstName, guideLastName, email, password, guidePhone, city) {
    $.post("/guide/register", {
      guideFirstName: guideFirstName,
      guideLastName: guideLastName,
      email: email,
      password: password,
      guidePhone: guidePhone,
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