$(document).ready(function () {
  $("#password").on("input", function () {
    var password = $(this).val();
    var strength = checkPasswordStrength(password);
    displayStrength(strength);
  });

  function checkPasswordStrength(password) {
    if (password.length < 8) {
      return "Weak";
    } else if (password.length < 12) {
      return "Medium";
    } else {
      return "Strong";
    }
  }

  function displayStrength(strength) {
    var strengthDiv = $("#password-strength");
    strengthDiv.text(strength);
    strengthDiv.removeClass("weak medium strong").addClass(strength);
  }
});
