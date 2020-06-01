let cells = 1;
function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < cells; i++) {
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