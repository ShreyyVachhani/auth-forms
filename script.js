$(document).ready(function () {
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        var email = $("#regEmail").val();
        var password = $("#regPassword").val();
        var confirmPassword = $("#regConfirmPassword").val();
        if (password === confirmPassword) {
            $("#registerForm").hide();
            $("#loginForm").show();
        } else {
            $(".wrong-msg.not-match").hide();
            $(".wrong-msg.not-match").show();
            $("#sometext,#regConfirmPassword").css("border", "2px solid red");

            $("#loginButton,#registerButton").css("position", "relative");
            $("#loginButton,#registerButton").css("margin-top", "24px");
            $("#loginButton,#registerButton").animate({ left: "-20px" }, 100)
                .animate({ left: "20px" }, 100)
                .animate({ left: "-20px" }, 100)
                .animate({ left: "20px" }, 100)
                .animate({ left: "0px" }, 100)
                .animate({ top: "-10px" }, 100)
                .animate({ top: "10px" }, 100)
                .animate({ top: "-10px" }, 100)
                .animate({ top: "10px" }, 100)
                .animate({ top: "0px" }, 100, function () {
                    $("#loginButton,#registerButton").css("background-color", "red");
                    $("#loginButton,#registerButton").css("color", "white");
                    setTimeout(function () {
                        $("#loginButton,#registerButton").css("background-color", "");
                        $("#loginButton,#registerButton").css("color", "");
                    }, 500);
                });
        }
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
    });

    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var inputvalue = $("#sometext").val();
        var email = $("#regEmail").val();
        var storedemail = localStorage.getItem('email');
        var storedPassword = localStorage.getItem('userPassword');
        if (email === storedemail) {
            $(".wrong-msg.mail").show();
            $(".wrong-msg.mail").hide();
            $("#sometext").css("border", "2px solid green");
        }
        if (inputvalue === storedPassword) {
            $(".right-msg").show();
            $(".wrong-msg").hide();
            $("#sometext").css("border", "2px solid green");
            window.location.href = "/dashbord.html";
        } else {
            $(".right-msg").hide();
            $(".wrong-msg").show();
            $("#sometext").css("border", "2px solid red");

            $("#loginButton").css("position", "relative");
            $("#loginButton").animate({ left: "-20px" }, 100)
                .animate({ left: "20px" }, 100)
                .animate({ left: "-20px" }, 100)
                .animate({ left: "20px" }, 100)
                .animate({ left: "0px" }, 100)
                .animate({ top: "-10px" }, 100)
                .animate({ top: "10px" }, 100)
                .animate({ top: "-10px" }, 100)
                .animate({ top: "10px" }, 100)
                .animate({ top: "0px" }, 100, function () {
                    $("#loginButton").css("background-color", "red");
                    $("#loginButton").css("color", "white");
                    setTimeout(function () {
                        $("#loginButton").css("background-color", "");
                        $("#loginButton").css("color", "");
                    }, 500);
                });
        }
    });
    $("#showLogin").click(function (event) {
        event.preventDefault();
        $("#registerForm").hide();
        $("#loginForm").show();
    });

    $("#showRegister").click(function (event) {
        event.preventDefault();
        $("#loginForm").hide();
        $("#registerForm").show();
    });

    $(".toggle-password").click(function () {
        var passwordField = $("#regPassword,#sometext");
        var fieldType = passwordField.attr("type");
        var eyeIcon =
            "/img/eye-on.svg";
        var eyeOffIcon =
            "/img/eye-off.svg";

        if (fieldType === "password") {
            passwordField.attr("type", "text");
            $(".eye-icon").attr("src", eyeOffIcon);
        } else {
            passwordField.attr("type", "password");
            $(".eye-icon").attr("src", eyeIcon);
        }
    });
});

