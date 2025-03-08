// 1
function deleteLetters(str, letters){
    str = str.split("")
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < letters.length; j++){
            if (str[i] == letters[j]){
                str.splice(i, 1)
                i--
            }
        }
    }
    alert(str.join(""))
}

let userString = prompt("Введіть рядок")
let userLetters = prompt("Введіть символи які потрібно видалити через пробіл").split(" ")

deleteLetters(userString, userLetters)


// 2
function numArithmetic(arr){
    let sum = 0, count = 0
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
            sum += arr[i]
            count++
        }
    }
    alert(sum/count)
}

let arr = ["34", 6 ,"df", 7, 5, "gfd", "hello", 55, 34];
numArithmetic(arr)


// 3
function removeElement(array, item){
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            array.splice(i, 1)
            i--
        }
    }
    alert(array)
}

removeElement([1, 3, 4, 6, 2, 5, 7], 4)