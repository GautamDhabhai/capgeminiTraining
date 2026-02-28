let table = document.createElement("table");
table.style.border = "1px solid black";

for (let i = 0; i < 5; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < 5; j++) {
    let cell = document.createElement("td");
    cell.textContent = `${i + 1}x${j + 1}`;
    row.appendChild(cell);
    cell.style.border = "1px solid black";
  }

  table.appendChild(row);
}

document.body.appendChild(table);

let a = null;

a = 230; // a is now a number this is allowed in JavaScript because it is a dynamically typed language
