// 1
let table = document.querySelector(".pifagor-table");

for (let i = 1; i <= 10; i++) {
  let row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    let cell = document.createElement("td");
    cell.setAttribute("row", `${i}`);
    cell.setAttribute("col", `${j}`);
    cell.innerHTML = `${i * j}`;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// table.addEventListener("mouseover", (event) => {
//     if (event.target.tagName === "TD") {
//       let row = event.target.getAttribute("data-row");
//       let col = event.target.getAttribute("data-col");
//       document.querySelectorAll('td').forEach((el) => {
//         if (el.getAttribute("data-row") === row || el.getAttribute("data-col") === col) {
//           el.style.backgroundColor = "lightblue";
//         } else {
//           el.style.backgroundColor = "none";
//         }
//       });
//     }
//   });


// 2
const title = document.querySelector(".title");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", () => {
    title.classList.toggle("changed");
})


// 3
const img = document.querySelector(".random-img");
setInterval(() => {
  img.src = `assets/images/${Math.floor(Math.random() * 9) + 1}.png`
}, 3000)