var number1 = document.querySelector('#number1');
var number2 = document.querySelector('#number2');
function calculate() {
    console.log(add(+number1.value, +number2.value));
}
function add(n1, n2) {
    return n1 + n2;
}
