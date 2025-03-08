// 1
function makeSum(num = 0) {
  let startNum = num;

  return function (numToAdd) {
    startNum += numToAdd;
    return startNum;
  };
}

let sum1 = makeSum(0)
console.log(sum1(4))
console.log(sum1(5))

let sum2 = makeSum(100)
console.log(sum2(4))
console.log(sum2(5))

// 2
function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

let part1 = multiply(5)
let part2 = part1(5)
console.log(part2)

console.log(multiply(5)(3))


// 3
function getUserNumber() {
  let userNum = 0;
  for (let i = 1; i <= 10; i++) {
    if (userNum <= 100) {
      userNum = parseInt(prompt("Enter a number bigger than 100"));
    } else {
      alert(`Останнє число ${userNum}`);
      break;
    }
  }
}

getUserNumber()