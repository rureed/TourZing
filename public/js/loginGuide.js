$(document).ready(function() {

    // Getting references to our form and inputs
    const loginForm = $("form.loginGuide");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      let guideData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };

      // removed !userData.name from below parentheses
      if (!guideData.email || !guideData.password) {
        return;
      }

      // If we have an email and password we run the loginUser function and clear the form
      // removed userData.name from below
      loginGuide(guideData.email, guideData.password);
      // nameInput.val("");
      emailInput.val("");
      passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    // removed name from the passed arguments
    function loginGuide(email, password) {
      $.post("/guide/loginGuide", {
        email: email,
        password: password
      })
        .then(function() {

          window.location.replace("/accountGuide");

          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
});