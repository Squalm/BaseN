let limit = 5;
let base = 6;
const ops = ["+", "-", "*"];
let ans = 0;

window.onload = () => {
    ans = newq();
    document.getElementById("mark").innerHTML = "b" + base.toString();
}

function newq() {

    if (document.getElementById("limit").value != "") {
        limit = parseInt(document.getElementById("limit").value);
    }
    if (document.getElementById("base").value != "" && document.getElementById("base").value != "1") {
        base = parseInt(document.getElementById("base").value);
        document.getElementById("mark").innerHTML = "b" + base.toString();
    }
    document.getElementById("answer").value = "";

    let op = ops[Math.floor(Math.random() * ops.length)];
    let x = Math.floor(Math.random() * (limit + 1));
    let y = Math.floor(Math.random() * (limit + 1));
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
        newq();
    }

}