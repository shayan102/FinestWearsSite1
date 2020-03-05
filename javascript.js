var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var password = document.getElementById("password");
var email = document.getElementById("email");
var loginbtn= document.getElementsByClassName("loginBtn");
var signupBtn = document.getElementsByClassName("signupBtn");

function callNumber() {
    alert("Do you want to call the number ?")
}


function showsignedup() {
    if (firstname.value.length === 0) {
        alert("please enter first name");
        firstname.focus();
        return false
    }
    else if (lastname.value.length === 0) {
        alert("please enter last name");
        lastname.focus();
        return false
    }
    else if (password.value.length === 0) {
        alert("please enter password")
        password.focus();
        return false;
    }
    else if (email.value.length === 0) {
        alert("please enter your email");
        email.focus();
        return false
    }
    else {
        alert("Welcome! You have successfully signed up.")
        window.location.reload();
    }
}

function showloggedin() {
    if (email.value.length === 0) {
        alert("please enter your email")
        email.focus();
        return false
    }

    else if (password.value.length === 0) {
        alert("please enter your password")
        password.focus();
        return false
    }
    else {
        alert("Welcome! You have successfully logged in.")
        window.location.reload();
    }
}
