function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b == 0) return "cannot divide by 0";
    else return a / b;
}
function operator(a, b, opr) {
    if (opr == "+") return add(a, b);
    if (opr == "-") return sub(a, b);
    if (opr == "*") return mul(a, b);
    if (opr == "/") return div(a, b);
}
let num1 = null;
let num2 = null;
let opr = null;
let cntDot = 0;

display.innerText = "";
function populate(data) {
    if (data == "+" || data == "-" || data == "*" || data == "/") {
        if (display.innerText == "") return;
        cntDot = 0;
        if (num1 == null) {
            opr = data;
            num1 = parseFloat(display.innerText, 10);
            display.innerText += data;
        } else {
            num2 = parseFloat(display.innerText.split(opr)[1], 10);
            display.innerText = operator(num1, num2, opr);
            num1 = parseFloat(display.innerText, 10);
            num2 = null;
            opr = data;
            display.innerText += data;
        }
    } else if (data == "=") {
        cntDot = 0;
        if (
            num1 != null &&
            display.innerText[display.innerText.length - 1] != opr
        ) {
            num2 = parseFloat(display.innerText.split(opr)[1], 10);
            display.innerText = operator(num1, num2, opr);
            num1 = null;
            num2 = null;
            opr = null;
        }
    } else if (data == "c") {
        cntDot = 0;
        num1 = null;
        num2 = null;
        opr = null;
        display.innerText = "";
    } else if (data == "bs") {
        if (display.innerText.length == 1) {
            num1 = null;
            num2 = null;
            opr = null;
        }
        if (display.innerText[display.innerText.length - 1] == opr) {
            opr = null;
            num2 = null;
        } else if (display.innerText[display.innerText.length - 1] == ".") {
            cntDot = 0;
        }
        display.innerText = display.innerText.slice(0, -1);
    } else {
        if (data == "." && cntDot == 0) {
            display.innerText += data;
            cntDot = 1;
        } else if (data != ".") {
            display.innerText += data;
        }
    }
}
const b1 = document.getElementById("1");
b1.addEventListener("click", () => {
    populate(1);
});
const b2 = document.getElementById("2");
b2.addEventListener("click", () => {
    populate(2);
});
const b3 = document.getElementById("3");
b3.addEventListener("click", () => {
    populate(3);
});
const b4 = document.getElementById("4");
b4.addEventListener("click", () => {
    populate(4);
});
const b5 = document.getElementById("5");
b5.addEventListener("click", () => {
    populate(5);
});
const b6 = document.getElementById("6");
b6.addEventListener("click", () => {
    populate(6);
});
const b7 = document.getElementById("7");
b7.addEventListener("click", () => {
    populate(7);
});
const b8 = document.getElementById("8");
b8.addEventListener("click", () => {
    populate(8);
});
const b9 = document.getElementById("9");
b9.addEventListener("click", () => {
    populate(9);
});
const b0 = document.getElementById("0");
b0.addEventListener("click", () => {
    populate(0);
});
const plus = document.getElementById("+");
plus.addEventListener("click", () => {
    populate("+");
});
const minus = document.getElementById("-");
minus.addEventListener("click", () => {
    populate("-");
});
const multiply = document.getElementById("*");
multiply.addEventListener("click", () => {
    populate("*");
});
const divide = document.getElementById("/");
divide.addEventListener("click", () => {
    populate("/");
});
const equal = document.getElementById("=");
equal.addEventListener("click", () => {
    populate("=");
});
const clear = document.getElementById("c");
clear.addEventListener("click", () => {
    populate("c");
});
const dot = document.getElementById(".");
dot.addEventListener("click", () => {
    populate(".");
});
const bs = document.getElementById("bs");
bs.addEventListener("click", () => {
    populate("bs");
});
document.addEventListener("keydown", (e) => {
    if (e.key == 0) populate(0);
    if (e.key == 1) populate(1);
    if (e.key == 2) populate(2);
    if (e.key == 3) populate(3);
    if (e.key == 4) populate(4);
    if (e.key == 5) populate(5);
    if (e.key == 6) populate(6);
    if (e.key == 7) populate(7);
    if (e.key == 8) populate(8);
    if (e.key == 9) populate(9);
    if (e.key == "Backspace") populate("bs");
    if (e.key == "Enter") populate("=");
    if (e.key == "=") populate("=");
    if (e.key == "+") populate("+");
    if (e.key == "-") populate("-");
    if (e.key == "*") populate("*");
    if (e.key == "/") populate("/");
    if (e.key == ".") populate(".");
});
