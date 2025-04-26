"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// const moment = require("moment/moment")

// modal
var myModal = document.getElementById('exampleModal');
var myInput = document.querySelector('.btn-boo');
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});

// tooltip
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="modal"]');
var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// alert
var alertPlaceholder = document.getElementById('AlertPlaceholder');
var appendAlert = function appendAlert(message1, message2, type) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div>".concat(message1, "</div>"), "    <hr>", "    <div>".concat(message2, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
  alertPlaceholder.append(wrapper);
};
var alertTrigger = document.getElementById('AlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    appendAlert('Тут має бути алерт!', 'Lorem ipsum dolor sit.', 'success');
  });
}

// set birthday
document.querySelector('.my-birthday').textContent = moment('2006-06-29').format('DD MMMM YYYY');

// form validation
document.querySelector('.bootstrap-form').addEventListener('submit', function (event) {
  var input = document.querySelector('#inputDate');
  input.classList.remove('is-valid');
  input.classList.remove('is-invalid');
  event.preventDefault();
  checkValidDate(input);
});
function checkValidDate(input) {
  var value = input.value;
  if (value.match(/\b\d{2}\/\d{2}\/\d{4}\b/)) {
    setNewDate(value);
    setValid(input);
  } else {
    setInvalid(input);
  }
}
function setValid(input) {
  input.classList.add('is-valid');
}
function setInvalid(input) {
  input.classList.add('is-invalid');
}
function setNewDate(date) {
  var newDate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  document.querySelector('.new-date').textContent = newDate;
}