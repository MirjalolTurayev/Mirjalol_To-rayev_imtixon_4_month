'use strict';

(function () {
    let userName = localStorage.getItem('user');
    let token = localStorage.getItem('token');
    $('#account').innerHTML = `${userName}`;
    if ( ! token ) {
        location.replace('./login.html')
    }
}())
//--- modal start ------/

// $('.menu-icon').addEventListener('click', () => {
//     $('.menu-icon').classList.toggle('activ-modal')
// })