let limit = 5;
let base = 6;
const ops = ["+", "-", "*", "/"];
let ans = 0;
let x;
let y;
let op;


window.onload = () => {
    ans = newq();
    document.getElementById("mark").innerHTML = "b" + base.toString();
}

function newq(save) {

    if (save) {
        document.getElementById("history").innerHTML = 
            x.toString(base) + op + y.toString(base) + "=" + ans.toString(base) + " " + document.getElementById("history").innerText;
    }

    if (document.getElementById("limit").value != "") {
        limit = parseInt(document.getElementById("limit").value);
    }
    if (document.getElementById("base").value != "" && document.getElementById("base").value != "1") {
        base = parseInt(document.getElementById("base").value);
        document.getElementById("mark").innerHTML = "b" + base.toString();
    }
    document.getElementById("answer").value = "";

    op = ops[Math.floor(Math.random() * ops.length)];
    x = Math.floor(Math.random() * limit) + 1;
    y = Math.floor(Math.random() * limit) + 1;

    // Acount for trivial values
    if (op == "/") {
        while (x % y != 0 || y == 1) {
            x = Math.floor(Math.random() * limit) + 1;
            y = Math.floor(Math.random() * limit) + 1;
        }
    } else if (op == "*" && limit > 1) {
        while (x == 1 || y == 1 || x == 0 || y == 0) {
            x = Math.floor(Math.random() * limit) + 1;
            y = Math.floor(Math.random() * limit) + 1;
        }
    } else {
        while (x == 0 || y == 0) {
            x = Math.floor(Math.random() * limit) + 1;
            y = Math.floor(Math.random() * limit) + 1;
        }
    }

    document.getElementById("question").innerHTML = x.toString(base) + op + y.toString(base);

    ans = 0;
    if (op == "+") { ans = x + y }
    else if (op == "-") { ans = x - y }
    else if (op == "/") { ans = x / y }
    else if (op == "*") { ans = x * y }
    else { console.log("Halp not a valid operation!")}
    
    return ans;

}

function check(field) {

    if (field.value == ans.toString(base)) { 
        newq(true);
    }

}