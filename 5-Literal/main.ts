enum returnType{
  ASNUMBER,
  ASTEXT
}
// literal type can have only selected values
function combine(number1: string | number, number2: string | number,returnType:returnType) {
  let result;

  if (typeof number1 === "number" && typeof number2 === "number") {
    result = number1 + number2;
    return result;
  } else {
    result = number1.toString() + number2.toString();
    return result
  }
}


console.log(combine(1,2,returnType.ASNUMBER));
console.log(combine('abhi','jeet',returnType.ASTEXT));
