//array destructuring
const number = [1,2,3,4];
[num1,num2] = number;

console.log(num1,num2);

//if wanna skip [2] leave an empty space as per order 
[num, ,num3] = number;

console.log(num,num3);

//if wanna skip [1,2,3] leave an empty space as per order 
[ , , ,num4] = number;

console.log(num4);


//Object destructuring
const person = {
    name: 'MAX',
    age: 27
}

let name;
({name} = person);
console.log(name);

//const {name: firstName} = person;
//console.log(firstName);

//Assigning to new variables names and providing default values
const {name: firstName, lastName = 'Glen' } = person;
console.log(firstName, lastName);


[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]


({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}