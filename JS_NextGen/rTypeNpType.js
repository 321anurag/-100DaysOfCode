//primitive-type
let number =1;
const num2 =number;


number = 3;
console.log(num2);

//reference-type
const person = {
  name: 'Max'
};

const newPerson = person;
person.name = 'Manu'
console.log(newPerson);

//immutable copying - creates actual copy using spread. 
//this we we copy only the properties of old obj to new
// we do not copy the object hence properties are stored in actual in place of pointer.
const copyPerson = {
  ...person
};

person.name = 'RAM'
console.log(copyPerson);
console.log(newPerson);