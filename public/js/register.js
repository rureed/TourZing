$(document).ready(function () {

    // Getting references to our form and inputs
    const signUpForm = $("form.signup");
    const firstNameInput = $("input#firstName");
    const lastNameInput = $("input#lastName");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");

    // When the signup button is clicked, we validate the name, email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        let userData = {
            firstname: firstNameInput.val().trim(),
            lastname: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.firstName ||!userData.lastName || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userDate.firstName, userDate.lastName, userData.email, userData.password);
        firstNameInput.val("");
        lastNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    /// Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, email, password) {
    $.post("/auth/register", {
      firstName: firstName,
      lastName: lastName,
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