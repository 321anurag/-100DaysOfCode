//Spread operator

const numbers =[1,2,3];
const newNumber = [numbers,4,5];

console.log(newNumber);

const newNumber_spread = [...numbers,4,5];

console.log(newNumber_spread);

const person = {
  name: 'Max'
};

const newPerson = {
  person,
  age: 28
};

console.log(newPerson);

const newPerson_spread = {
  ...person,
  age: 28
};

console.log(newPerson_spread);


//REST operator
const filter = (...args) => {
  return args.filter(el => el ===1);
}

console.log(filter(1,2,3,4,1));


//REST operator
const filter_short = (...args) => args.filter(el => el ===1);

console.log(filter_short(1,2,3,4,1));