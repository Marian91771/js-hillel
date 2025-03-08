console.log("ДЗ 3.1. Перелік типів")

let a
console.log(typeof(a))

let b = 4
console.log(typeof(b))

let c = "Marian"
console.log(typeof(c))

let d = [2, 4, 5, 6]
console.log(typeof(d))

let e = true;
console.log(typeof(e))

let f = 4534535354545345943503453459034503095349050934590534953953n;
console.log(typeof(f))

let g = null;
console.log(typeof(g))



console.log("ДЗ 3.2. Числа та рядки")

let strs = []
let indexes = [0, 1, 2]

strs[0] = prompt("Перший рядок:");
strs[1] = prompt("Другий рядок:");
strs[2] = prompt("Третій рядок:");

indexes.sort(() => Math.random() - 0.5);

console.log(`${strs[indexes[0]]}, ${strs[indexes[1]]}, ${strs[indexes[2]]}`);


console.log("ДЗ 3.3. Розкласти п'ятизначне число")

let defaultString = "10369"
let modifiedString = defaultString.split("").join(" ")
console.log(modifiedString)