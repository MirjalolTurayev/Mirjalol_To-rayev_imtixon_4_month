"use strict";


const loginUrl = "https://task.samid.uz/v1/user/sign-in"



const login = (e) => {
  e.preventDefault()
  const userName = $("#userNamelogin").value.trim();
  const userPassword = $("#passwordlogin").value.trim();

  const params = {
    username: userName,
    password: userPassword,
  };

  if (userName.length === 0 || userPassword.length === 0) {
    alert('no')
  } else {
    fetch(`${loginUrl}`, {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      })
      .then((e) => e.json())
      .then((e) => {
        if(e.code === 1) {
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('user', e.data.username)
          alert(`${e.data.username}welcome to admin dashboard`)
          setInterval(() => {
            window.location.replace('./home.html')
          })          
        } else {
          alert(e.message)
        }
      })
  }

}


$('#loginForm').addEventListener ('submit', (e) => {
  login(e)
})


$('#btn_google').addEventListener ('click', (e) => {
  e.preventDefault()
  window.location.replace('./signup.html');
})

$('.icon_password_eye').addEventListener ('click', (e) => {
  e.preventDefault()
  if ( $('#passwordlogin').getAttribute('type') === 'password'){
      $('#passwordlogin').setAttribute('type', 'text');
      $('.icon_password_eye').style.display = 'none';
      $('.icon_password_slash_eye').style.display = 'block';
  }
})
$('.icon_password_slash_eye').addEventListener ('click', (e) => {
  e.preventDefault()
  if ( $('#passwordlogin').getAttribute('type') === 'text'){
      $('#passwordlogin').setAttribute('type', 'password');
      $('.icon_password_slash_eye').style.display = 'none';
      $('.icon_password_eye').style.display = 'block';
  }
})