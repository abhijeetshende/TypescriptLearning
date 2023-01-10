let array: string[] = ["a"];
array.push("a");
console.log(array);

// array.push(1); // will create compilation error

let person: {
  name: string;
  age: number;
  location: string;
  hobbies: string[];
} = {
  name: "John Smith",
  age: 30,
  location: "New York",
  hobbies: ["programming", "reading", "running"],
};

for (const iterator of person['hobbies']) {
  console.log(iterator);
}
