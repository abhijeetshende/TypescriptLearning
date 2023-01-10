var array = ["a"];
array.push("a");
console.log(array);
// array.push(1); // will create compilation error
var person = {
    name: "John Smith",
    age: 30,
    location: "New York",
    hobbies: ["programming", "reading", "running"]
};
for (var _i = 0, _a = person['hobbies']; _i < _a.length; _i++) {
    var iterator = _a[_i];
    console.log(iterator);
}
