'use strict';

const baseUrl = "https://task.samid.uz/v1/user/sign-up";

const signUp = (e) => {
    e.preventDefault();
    const userName = $("#userName_signUp").value.trim();
    const userEmail = $("#email_signUp").value.trim();
    const userPassword = $("#password_signup").value.trim();
    console.log(userEmail);
    const params = {
        username: userName,
        email: userEmail,
        password: userPassword,
    };
    if (userName.length === 0 || userEmail.length === 0 || userPassword.length === 0 ) {
        alert('no')
    } else {
        fetch(`${baseUrl}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        }).then((e) => e.json())
        .then((e) => {
            if(e.code === 1) {
                alert(e.message);
                setTimeout(() => {
                    window.location.replace('./home.html');
                },2000)
            } else {
                alert(e.errors.username)
            }
        })
    }
};


$('#registration').addEventListener('submit', (e) => {    
    signUp(e);
});

$('.btn_google').addEventListener ('click', (e) => {
    e.preventDefault()
    window.location.replace('./login.html');
})

$('.icon_password_eye').addEventListener ('click', (e) => {
    e.preventDefault()
    if ( $('#password_signup').getAttribute('type') === 'password'){
        $('#password_signup').setAttribute('type', 'text');
        $('.icon_password_eye').style.display = 'none';
        $('.icon_password_slash_eye').style.display = 'block';
    }
})
$('.icon_password_slash_eye').addEventListener ('click', (e) => {
    e.preventDefault()
    if ( $('#password_signup').getAttribute('type') === 'text'){
        $('#password_signup').setAttribute('type', 'password');
        $('.icon_password_slash_eye').style.display = 'none';
        $('.icon_password_eye').style.display = 'block';
    }
})
