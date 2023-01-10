function combine(number1, number2) {
    var result;
    if (typeof number1 === "number" && typeof number2 === "number") {
        result = number1 + number2;
        return result;
    }
    else {
        result = number1.toString() + number2.toString();
        return result;
    }
}
console.log(combine(1, 2));
console.log(combine('abhi', 'jeet'));
