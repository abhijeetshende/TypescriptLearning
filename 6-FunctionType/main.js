function add(number1, num2) {
    return num2 + number1;
}
console.log(add(1, 2));
// let c ; //any
// c= add; // no error
var c;
c = add;
console.log(c()); // executing no params error shold come
var d; // custom function datatype
// d = add(); // error 
d = add;
console.log(d(1, 2));
