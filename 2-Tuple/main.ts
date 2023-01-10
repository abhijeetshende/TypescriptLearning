interface Person {
  name: string;
  age: number;
  location: string;
  hobbies: [string,number];   // creating tuple type
                              // first elemnt will be string and second elent will be number
}

let person: Person = {
  name: 'John Smith',
  age: 30,
  location: 'New York',
  hobbies: ['programming',1] // if pushing third value will show error during creation
};

person['hobbies'].push('admin') // pushing will work this is an execption