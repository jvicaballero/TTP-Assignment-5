let columns = 1;
function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
}

function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}

function addColumn() {
    columns++;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        tr[i].appendChild(cell);
    }
}

function removeColumn() {
    columns--;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
}

let selectedColor = "";

function selectColor(color) {
    selectedColor = color;
}

function colorAllUncoloredCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].style.backgroundColor == "")
            allCells[i].style.backgroundColor = selectedColor;
    }
}

function colorAllCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = selectedColor;
    }
}

function resetColorOfCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "";
    }
}