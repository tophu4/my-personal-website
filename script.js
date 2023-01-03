
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const sum = document.getElementById("sum").innerHTML;

function addToSum(n) {
    document.getElementById("sum").innerHTML = parseInt(document.getElementById("sum").innerHTML,10) + n;
}

function setSum(n) {
    document.getElementById("sum").innerHTML = n;
}