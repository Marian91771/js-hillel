import '../style.css'
import {checkValidDate} from './functions.js'

// modal
const myModal = document.getElementById('exampleModal')
const myInput = document.querySelector('.btn-boo')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="modal"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// alert
const alertPlaceholder = document.getElementById('AlertPlaceholder')
const appendAlert = (message1, message2, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message1}</div>`,
    `    <hr>`,
    `    <div>${message2}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('AlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Тут має бути алерт!', 'Lorem ipsum dolor sit.', 'success')
  })
}

// set birthday
document.querySelector('.my-birthday').textContent = moment('2006-06-29').format('DD MMMM YYYY')

// form validation
document.querySelector('.bootstrap-form').addEventListener('submit', (event) => {
  const input = document.querySelector('#inputDate')
  input.classList.remove('is-valid')
  input.classList.remove('is-invalid')
  event.preventDefault()

  checkValidDate(input)
})
