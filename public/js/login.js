$(document).ready(function () {

  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const nameInput = $("input#name")
  const emailInput = $("input#email");
  const passwordInput = $("input#password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    let userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.name || !userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.name, userData.email, userData.password);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(name, email, password) {
    $.post("/auth/login", {
      name: name,
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/account");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }

});