$(document).ready(function () {

    // Getting references to our form and inputs
    const signUpForm = $("form.signup");
    const nameInput = $("input#name")
    const emailInput = $("input#email");
    const passwordInput = $("input#password");

    // When the signup button is clicked, we validate the name, email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        let userData = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.name || !userData.email ||!userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.name, userData.email, userData.password);
        nameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/auth/register", {
      email: email,
      password: password
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