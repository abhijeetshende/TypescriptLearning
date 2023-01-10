function add(number1:number,num2:number) : number{
  return num2+ number1;
}

console.log(add(1,2));

// let c ; //any
// c= add; // no error

let c :Function;

c = add;
console.log(c()); // executing no params error shold come


let d:(a:number,b:number)=> number;    // custom function datatype


// d = add(); // error 

d = add;
console.log(d(1,2));



