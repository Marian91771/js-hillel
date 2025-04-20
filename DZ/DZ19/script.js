// const lat = '48.269728';
// const lon = '25.937105';
// const APIkey = '80b7a1da86a167c06c3dcde226ccf539';

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
//     .then(result => result.json())
//     .then(result => showWether(result))

// function showWether(api){
//     const block = document.createElement('p')
//     block.textContent = api.weather[0].main
//     document.querySelector('body').appendChild(block)
// }


// fetch('https://www.swapi.tech/api/people')
//     .then(result => result.json())
//     .then(result => showItems(result))


let urls = {
    people: 'https://www.swapi.tech/api/people',
    planets: 'https://www.swapi.tech/api/planets',
    starships: 'https://www.swapi.tech/api/starships'
}

sendRequest('people')
sendRequest('planets')
sendRequest('starships')

function sendRequest(param) {
    fetch(urls[param])
        .then(result => result.json())
        .then(result => {
            showItems(result, param)
            urls[param] = result.next
        })
}

function showItems(apiResult, param) {
    apiResult.results.forEach(element => {
        const item = document.createElement('p')
        item.setAttribute('data-uid', element.uid)
        item.textContent = element.name

        item.addEventListener('click', () => {
            fetchDetails(element.uid, param)
        });

        document.querySelector(`.${param}-block`).appendChild(item)
    });
    if (urls[param] != null) {
        addButton(param)
    }
}

function addButton(param) {
    const button = document.createElement('button')
    button.classList.add('load-more')
    button.textContent = 'Load more'

    button.addEventListener('click', () => {
        buttonClick(button, param)
    })

    document.querySelector(`.${param}-block`).appendChild(button)
}

function buttonClick(button, param) {
    button.remove()
    sendRequest(param)
}

function fetchDetails(uid, param) {
    fetch(`https://www.swapi.tech/api/${param}/${uid}`)
        .then(res => res.json())
        .then(data => showDetails(data.result))
}

function showDetails(data) {
    const detailsBlock = document.querySelector('.details')
    detailsBlock.innerHTML = ''

    const title = document.createElement('h3')
    title.textContent = data.properties.name

    detailsBlock.appendChild(title)

    for (let key in data.properties) {
        const prop = document.createElement('p')
        prop.innerHTML = `<strong>${key}</strong>: ${data.properties[key]}`
        detailsBlock.appendChild(prop)
    }
}
