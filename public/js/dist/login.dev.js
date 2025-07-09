"use strict";

var formDOM = document.forms[0];
var usernameOrEmailDOM = document.getElementById('username_or_email');
var passwordDOM = document.getElementById('password');

if (formDOM) {
  formDOM.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {
      usernameOrEmail: usernameOrEmailDOM.value,
      password: passwordDOM.value
    };
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.status === 'success' && data.action === 'redirect') {
        location.href = data.href;
      }
    })["catch"](console.error);
  });
}