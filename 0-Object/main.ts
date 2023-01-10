
//hover on person to check the type
let person ={
    'name':'abhijeet',
    'age':34
}

console.log('person',person);



let person:{
    name:string;
    age:number;
    location:string;
} ={
    'name':'abhijeet',
    'age':34,
    'address':'pune' 
}

// this code will not compile as type of person is expecting location instead of address
