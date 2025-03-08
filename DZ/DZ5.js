// 1
document.write("Task 1<br>")
for(let i=20; i<=30; i+=0.5){
    document.write(`${i} `)
}

// 2
document.write("<br><br>Task 2<br>")
const dollar = 42
for(let i=10; i<=100; i+=10){
    document.write(`${i}$=${i*dollar}₴<br>`)
}

// 3
document.write("<br><br>Task 3<br>")
const num3 = parseInt(prompt("Enter numder for task 3"))
for(let i=1; i<=100; i++){
    if(i*i>num){
        break;
    }
    document.write(`${i} `)
}

// 4
document.write("<br><br>Task 4<br>")
const num4 = parseInt(prompt("Enter numder for task 4"))
let flag1 = true
for(let i=num4-1; i>1; i--){
    if(num4%i == 0){
        flag = false
    }
}
document.write(flag ? "Число просте" : "Число не просте")

// 5
document.write("<br><br>Task 5<br>")
const num5 = parseInt(prompt("Enter numder for task 5"))
let flag2 = false
for(let i=1; i<=num5; i++){
    if(i*3 == num5){
        flag2 = true
    }
}
document.write(flag2 ? "Можна" : "Не можна")