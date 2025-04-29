export function checkValidDate(input) {
    const value = input.value

    if (value.match(/\b\d{2}\/\d{2}\/\d{4}\b/)) {
        setNewDate(value)
        setValid(input)
    } else {
        setInvalid(input)
    }
}

function setValid(input) {
    input.classList.add('is-valid')
}

function setInvalid(input) {
    input.classList.add('is-invalid')
}


function setNewDate(date) {
    const newDate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD')
    document.querySelector('.new-date').textContent = newDate
}