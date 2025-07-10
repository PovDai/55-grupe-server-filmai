"use strict";

var formDOM = document.forms[0];
var titleDOM = document.getElementById('title');
var urlDOM = document.getElementById('url');
var descriptionDOM = document.getElementById('description');
var statusPublishedDOM = document.getElementById('status_published');
var statusDraftDOM = document.getElementById('status_draft');

if (formDOM) {
  formDOM.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {
      title: titleDOM.value,
      url: urlDOM.value,
      status: 'draft'
    };

    if (descriptionDOM.value) {
      data.description = descriptionDOM.value;
    }

    if (statusPublishedDOM.checked) {
      data.status = 'published';
    }

    fetch('/api/admin/categories', {
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