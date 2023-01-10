enum Colors{
  RED ='red',
  GREEN ='green',
  YELLOW ='yellow'
}

interface enumObject{
  name:string;
  age:number;
  color:Colors
}

let sampleEmumObject:enumObject={
  name: "abhijeet",
  age: 35,
  color: Colors.YELLOW
}

console.log(sampleEmumObject);
