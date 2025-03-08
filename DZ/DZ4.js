// // ДЗ 4.1. Робота з prompt
let name = prompt("Enter your name:")
alert(`Hello, ${name}! How are you?`)



// // ДЗ 4.2. Перевірка числа
let number = prompt("Введіть тризначне число:")
number = number.split("") // Розбиваємо на цифри

// Перевірка на що всі цифри однакові
if(number[0]==number[1] && number[0]==number[2] && number[1]==number[2]){ 
    console.log("Всі цифри однакові")
} else {
    console.log("Всі цифри не однакові") 
}

// Перевірка на Чи є серед цифр цифри однакові
if(number[0]==number[1] || number[0]==number[2] || number[1]==number[2]){ 
    console.log("Cеред цифр є однакові цифри")
} else {
    console.log("Cеред цифр немає однакових цифр") 
}



// ДЗ 4.3. Портрет користувача
let year = prompt("Введіть свій рік народження:")
let city = prompt("Введіть місто в якому ви проживаєте:")
let sport = prompt("Введіть свій улюблений вид спорту:")

let error = ""
alertMessage = ""

// Перевірка не введених елементів
if(year == "" || year == null){
    error += (" вік")
}
if(city == "" || city == null){
    error += (" місто")
}
if(sport == "" || sport == null){
    error += (" улюблений спорт")
}

if (error.length > 0){
    alertMessage += (`Шкода, що Ви не захотіли ввести${error}`)
}

// Перевірка віку
if (year.length > 0){
    alertMessage += (`\nВаш вік: ${year}`)
}

// Перевірка міста
if(city == 'Київ' || city == 'Вашингтон' || city == 'Лондон'){
    alertMessage += (`\nТи живеш у столиці ${city}`)
} else if(city.length > 0) {
    alertMessage += (`\nТи живеш у місті: ${city}`)
}

// Перевірка спорту
if(sport == 'F1'){
    alertMessage += ("\nКруто! Хочеш стати Максом Ферстапеном?")
} else if (sport == 'кіберспорт'){
    alertMessage += ("\nКруто! Хочеш стати Сашою Сімплом?")
} else if(sport == 'теніс'){
    alertMessage += ("\nКруто! Хочеш стати Новаком Джоковичем?")
} else if(sport.length > 0){
    alertMessage += (`\nВаш улюблений спорт ${sport}`)
}

alert(alertMessage)


// ДЗ 4.4. Робота з switch…case
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr){
    case null:
        console.log('ви скасували')
        break
    case numOrStr.trim() === '':
        console.log('Empty String')
        break
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN')
        break
    default:
        console.log('OK!')
}



