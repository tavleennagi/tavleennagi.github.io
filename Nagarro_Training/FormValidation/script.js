$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error=true;
    var password_error=true;
    var confirm_password_error=true;

    $('#username').keyup(function(){
        usernamevalidation();
    });
    function usernamevalidation(){
        var username_val=$('#username').val();
        if(username_val.length==""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html("Username cannot be empty");
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }

        if(username_val.length<3 | username_val.length>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html("Invalid Username");
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }

    }

    $('#password').keyup(function(){
        passwordvalidation();
    });
    function passwordvalidation(){
        var password_val=$('#password').val();
        if(password_val.length==""){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html("Password cannot be empty");
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordevalidation').hide();
        }

        if(password_val.length<8 ){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html("Password must be greater than 8");
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('usernamevalidation').hide();
        }
    }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val = $('#password').val();
        if(password_val != confirm_password_val)
        {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html("Password did nto match");
            $('#confirmpasswordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('confirmusernamevalidation').hide();
        }
        
    }
    $('#submitvalidation').click(function(){

        usernamevalidation();
        passwordvalidation();
        confirm_password()
    });



});