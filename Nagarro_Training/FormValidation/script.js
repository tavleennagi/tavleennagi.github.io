$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var username_Error=true;
    var password_Error=true;
    var confirm_password_Error=true;
    let email_Error = true;


    $('#username').keyup(function(){
        usernamevalidation();
    });
    function usernamevalidation(){
        var usernameValue=$('#username').val();
        const usernameRegex = new RegExp(/^[a-z0-9_-]{3,10}$/gim);
        if (usernameValue.length === 0) {
            $("#usernamevalidation").show();
            $("#usernamevalidation").text("Username can't be empty");
            username_Error = true;
          } else if (!usernameRegex.test(usernameValue)) {
            $("#usernamevalidation").show();
            $("#usernamevalidation").text("Invalid Username");
            username_Error = true;
          } else {
            $("#usernamevalidation").hide();
            username_Error = false;
          }
        };
     
    $("#email").keyup(() => {
            emailValidation();
        });
        
    const emailValidation = () => {
      let emailValue = $("#email").val();
            const emailRegex = new RegExp(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
        if (emailValue.length === 0) {
              $("#emailvalidation").show();
              $("#emailvalidation").text("Email id can't be empty");
              email_Error = true;
         } else if (!emailRegex.test(emailValue)) {
              $("#emailvalidation").show();
              $("#emailvalidation").text("Invalid Email id");
              email_Error = true;
        } else {
              $("#emailvalidation").hide();
              email_Error = false;
            }
          };

    $('#password').keyup(function(){
        passwordvalidation();
    });
    function passwordvalidation(){
        var passwordValue=$('#password').val();
        const strongRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
          );
          if (passwordValue.length === 0) {
            $("#passwordvalidation").show();
            $("#passwordvalidation").text("Password can't be empty");
            password_Error = true;
          } else if (!strongRegex.test(passwordval)) {
            $("#passwordvalidation").show();
            $("#passwordvalidation").text("Invalid Password");
            password_Error = true;
          } else {
            $("#passwordvalidation").hide();
            password_Error = false;
          }
        };

        
    $("#confirmpassword").keyup(() => {
      confirmPasswordValidation();
    });
      const confirmPasswordValidation = () => {
      let confirmPasswordValue = $("#confirmpassword").val();
      let passwordValue = $("#password").val();
      if (confirmPasswordValue.length === 0) {
            $("#confirmpasswordvalidation").show();
            $("#confirmpasswordvalidation").text("Confirm Password can't be empty");
            confirm_password_Error = true;
       } else if (passwordValue !== confirmPasswordValue) {
            $("#confirmpasswordvalidation").show();
            $("#confirmpasswordvalidation").text(
              "Password and Confirm Password needs to be same"
            );
            confirm_password_Error = true;
       } else {
            $("#confirmpasswordvalidation").hide();
            confirm_password_Error = false;
          }
        };
   $("#submit-btn").click(() => {
      usernameValidation();
      emailValidation();
      passwordValidation();
      confirmPasswordValidation();
      if (username_Error || email_Error || password_Error || confirm_Password_Error) {
        return false;
      }
    });


});
