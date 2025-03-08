// 1
let num1 = parseInt(prompt("Введіть число 1"))
let num2 = parseInt(prompt("Введіть число 2"))

if(num1 > num2){
    console.log(`${num1} більше за ${num2}`)
} else if(num1 < num2){
    console.log(`${num1} менше за ${num2}`)
} else {
    console.log("Числа рівні")
}

// 2
let lenghtKm = parseInt(prompt("Введіть відстань в кілометрах")),
    lenghtFt = parseInt(prompt("Введіть відстань в футах")),
    lenghtKmConverted = lenghtKm * 1000,
    lenghtFtConverted = lenghtFt * 0.305

if(lenghtKmConverted > lenghtFtConverted){
    console.log("Відстань в кілометрах більша")
} else if(lenghtFtConverted > lenghtKmConverted){
    console.log("Відстань в футах більша")
}

// 3
let numA = parseInt(prompt("Введіть число А")),
    numB = parseInt(prompt("Введіть число Б"))

if(numA < numB){
    console.log(numB % numA == 0 ? "Число А є дільником числа Б" : "Число Б є дільником числа А")
} else if(numB < numA){
    console.log(numA % numB == 0 ? "Число Б є дільником числа А" : "Число А є дільником числа Б")
} else {
    console("Числа рівні")
}


// 4
let newNum = prompt("Введіть число"),
    lastDigit = newNum[1]
newNum = newNum.split("")
console.log(lastDigit%2==0 ? `Число парне, остання цифра ${lastDigit}` : `Число не парне, остання цифра ${lastDigit}`)

// 5
let num = prompt("Введіть число")
num = num.split("")
console.log(num[0] > num[1] ? `Цифра ${num[0]} більша` : `Цифра ${num[1]} більша`)

//6
let bigNum = prompt("Введіть число")
bigNum = bigNum.split("")

bigNum.forEach(element => {
    element = parseInt(element)
});

console.log(sum(bigNum)%2 == 0 ? "Сума цифр парна" : "Сума цифр не парна")
console.log(sum(bigNum)%5 == 0 ? "Сума цифр кратна 5" : "Сума цифр не кратна 5")
let product = bigNum[0]*bigNum[1]*bigNum[2]
console.log(product > 100 ? "Добуток цифр більший за 100" : "Добуток цифр менший за 100")

if(bigNum[0] == bigNum[1] && bigNum[0] == bigNum[2] && bigNum[1] == bigNum[2]){
    console.log("Всі цифри однакові")
} else {
    console.log("Всі цифри не однакові")
}

if(bigNum[0] == bigNum[1] || bigNum[0] == bigNum[2] || bigNum[1] == bigNum[2]){
    console.log("Серед цифр є однакові")
} else {
    console.log("Серед цифр немає однакових")
}

// 7
let lastNum = prompt("Введіть шестизначне число")
reversedLastNum = lastNum.split("").reverse().join("")
console.log(lastNum == reversedLastNum ? "Число дзеркальне" : "Число не дзеркальне")