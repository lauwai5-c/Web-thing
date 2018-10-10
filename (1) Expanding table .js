function function1(){

var tbl = document.getElementById("FirstTable"); // TABLE ID

// You can directly copy below codes by changing the table id only

var row = tbl.insertRow(tbl.rows.length);    // expending row
var i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }


    var tcbl = document.getElementById("FirstTable"); //expending column
    var i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}




// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement("div"); // create DIV element
    var txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute("class", style);        // set DIV class attribute
    div.setAttribute("className", style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);      
}

