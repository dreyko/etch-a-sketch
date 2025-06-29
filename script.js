const container = document.querySelector(".container");
const inputRows = document.getElementById("input-rows");
const inputColumns = document.getElementById("input-columns");
const generateGridBtn = document.getElementById("generate-grid");

let mouseButton0Down = false;

const row = document.createElement("div");
row.classList.add("row");
const box = document.createElement("div");
box.classList.add("grid-box");
box.setAttribute("onmouseenter", "colorDiv(this)");

generateGridBtn.addEventListener("click", () => createGrid(parseInt(inputRows.value), parseInt(inputColumns.value)));

function colorDiv(el) {
    el.style.backgroundColor = "black";
}

function getBoxWidth(columns) {
    return Math.floor(window.innerWidth * 9/10 / columns);
}

function getBoxHeight(rows) {
    return Math.floor(window.innerHeight * 8/10/ rows);
}

function createGrid(columns, rows) {
    container.replaceChildren();
    row.replaceChildren();
    box.style.width = `${getBoxWidth(columns)}px`;
    box.style.height = `${getBoxHeight(rows)}px`;

    for(let j = 0;j < columns;j++){
    row.appendChild(box.cloneNode(true));
    }
    for(let i = 0; i < rows;i++){
    container.appendChild(row.cloneNode(true));
    }
}


