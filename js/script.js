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

function colorFill(clickedElement){
    alert('I was clicked');
    //clickedElement.target.style = 
}

/*document.getElementsByClassName("row").addEventListener("mousedown" , event => {
    alert('you clicked me');
})*/

ul.addEventListener('click',colorFill, true);
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

