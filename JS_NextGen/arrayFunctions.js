const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
    return num*2;
});

console.log(numbers);
console.log(doubleNumArray);

const words = {'spray': 1, 'limit': 2, 'elite': 3, 'exuberant': 4, 'destruction': 5, 'present': 6};

const result = words.filter(word => word.value > 3);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


const array1 = [5, 7, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


const array2 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array2.findIndex(isLargeNumber));
// expected output: 3


const arraya = ['a', 'b', 'c'];
const arrayb = ['d', 'e', 'f'];
const arrayc = arraya.concat(arrayb);

console.log(arrayc);
// expected output: Array ["a", "b", "c", "d", "e", "f"]




const arraynew = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => { return accumulator + currentValue };


// 1 + 2 + 3 + 4
console.log('reduce ---->', arraynew.map(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log('reduce ---->', arraynew.map(reducer, 5));
console.log('reduce ---->', reducer);
// expected output: 15




const months = ['Jan', 'March', 'April', 'June'];

//Object.freeze(months);

months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]




const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]