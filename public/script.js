let limit = 5;
let base = 6;

const ops = ["+", "-", "*", "/"];
const ones = ["zero", "one", "two", "three", "four", "five"]
const sixes = ["hex", "twixy", "thrixy", "fourxy", "fixy", "hundrex"]

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
            x.toString(base) + op + y.toString(base) + "=" + 
            ans.toString(base) + " " + document.getElementById("history").innerText;
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
    }

    document.getElementById("question").innerHTML = x.toString(base) + op + y.toString(base);

    if (base == 6 && x.toString(base).length <= 3 && y.toString(base).length <= 3) {
        let words = toWords(x) + " " + op + " " + toWords(y);
        document.getElementById("words").innerHTML = words;        
    }

    ans = 0;
    if (op == "+") { ans = x + y }
    else if (op == "-") { ans = x - y }
    else if (op == "/") { ans = x / y }
    else if (op == "*") { ans = x * y }
    else { console.log("Halp not a valid operation!")}
    
    return ans;

}

function toWords(k) {
    let s = k.toString(base);
    let out = "";

    if (s.length == 3) {
        out += ones[parseInt(s[0], 10)] + " " + sixes[5] + " "
        if (s[1] != 0) {
            out += sixes[parseInt(s[1], 10)-1] + " ";
        }
        if (s[2] != 0) {
            out += ones[parseInt(s[2], 10)];
        }
    } else if (s.length == 2) {
        out += sixes[parseInt(s[0], 10)-1] + " ";
        if (s[1] != 0) {
            out += ones[parseInt(s[1], 10)];
        }
    } else {
        out += ones[parseInt(s[0], 10)];
    }
    
    return out;
}

function check(field) {

    if (field.value == ans.toString(base)) { 
        newq(true);
    }

}