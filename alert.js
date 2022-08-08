// let users = [
//   {id: 1, name: "Sachin"},
//   {id: 2, name: "Wariko"},
//   {id: 3, name: "Hansraj"}
// ];

// let user = users.find(item => item.id == 1);
// console.log(user.name);

// const obj = {
//   name : "Sachin",
//   language : "JavaScript",
//   hobbies : "Coding"
// }

// we can use fon-in with strings to loop through all the characters
// const myString = " This side is Sachin";
// for (let key in obj) {
//   console.log(obj[key]);
// }

// const myString = ["Sachin", "Shubham", "Sameer"];
// for (let key of  myString) {
//   console.log(key);
// }

//

/*
const myMap = new Map();
const key1 = 'myStr', key2 = {}, key3 = function () {};
console.log(myMap);

// settng values in Map
myMap.set(key1, 'This is string');
myMap.set(key2, 'This is Empty obj');
myMap.set(key3, 'This is empty function');

// getting map values and key
const value1 = myMap.get(key3);
console.log(value1);

//  get the size of Map
const size = myMap.size;
console.log(size);

// we can loop for..of to get values and keys
for (const [key, value] of myMap) {
  console.log(key, value);
}

// for only keys
for (const key of myMap.keys()) {
  console.log("keys is :",key);
}

// for only values 
for (const value of myMap.values()) {
  console.log("value is : ",value);
}

// we can use forEach loop on a map
myMap.forEach(( key, value) => {
  console.log("key is...", key);
  console.log("value is...", value);
})

// for only keys
myMap.forEach((key) => {
  console.log("key is.", key);
})

// for only values
myMap.forEach((value) => {
  console.log("value is.", value);
})

// Converting map into an Array
 const myArray = Array.from(myMap);
 console.log("Map into Array is : ",myArray);

// converting only map keys into Array
const myKeys = Array.from(myMap.keys());
console.log("Map to keys arrays is :",myKeys);

// converting only map values into Array
const myValues = Array.from(myMap.values());
console.log("Map to values arrays is :",myValues);
*/

/*

function sumSalaries(salaries) {
  let sum = 0;
  for (const salary of Object.values(salaries)) {
    sum += salary;
  }
return sum;

}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};
console.log( sumSalaries(salaries) ); 
*/

// function count (user) {
//   return Object.keys(user).length;
// }

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(count(user));

// let hello = {};
// console.log(hello);

// ( function() {

//   var a=b=3;

// }) ();

// console.log(typeof a, b);

// Desturctring an Array

// let anArray = [ 1, 3, 5, 7, 9];

// let [ a, b, c, d, e] = anArray;
// console.log( a, b, d, e);

// let string = "My name is Sachin kumar".split(' ');
// console.log(string);
// console.log(typeof string);

// let [ a, b, c, ...d ] = string;
// console.log(a, b, c, d);

// console.log(a[01]);

// const [ Sac , Nitesh] = "Sachin Gourav".split(' ');

// console.log(typeof )
// console.log(Sac, Gourav);
// console.log(name.length);
// console.log(Nitesh);

// let obj = {};
//  [ obj.name, obj.age ] = "Sachin 19".split(' ');
//  console.log(obj.name);

//  const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// console.log(typeof object1);

// let [a, b, c] = "Sachin kumar".split(' '); // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(a,b);

// let user = {
//   name: "John",
//   age: 30
// };

// // loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// // if we have complex object
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let {
//   size: {
//     width,
//     height
//   },
//   item : [ item1, item2],
//   title = "Alien"

// } = options;;

/*
let user = { name: "John", years: 30 };

let { name, years : age, isAdmin = false } = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

*/

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries) {

//   let maxSalary = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }
// // const name = topSalary();
// console.log(topSalary());

// 💡 Date and Time
/*
// How to create data and time
let now = new Date();
console.log(now);

let oldDate = new Date(0);
console.log(oldDate);

let next24 = new Date(24 * 3600 * 1000);
console.log(next24);

let date = new Date("2022-07-29");
console.log(date);

let customDate = new Date(2023, 6, 29, 0, 0, 0);
console.log(customDate);

let currenTime = Date.now(); // milliseconds count from 1 Jan 1970
console.log(currenTime);

let creatdeDate = new Date(2012, 1, 20, 3, 12);
console.log(creatdeDate);
*/

/*
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let Tareek = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(Tareek));
*/

/*
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}

let newdate = new Date(2012, 0, 3);
console.log(getLocalDay(newdate));
*/

/*
function getLastDateOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDateOfMonth(2022, 11));
*/

/*
//  sum of n number using recursion..

function sumTo(n) {
  if(n == 1) {
    return n;
  }
  return n + sumTo(n - 1);
}

console.log(sumTo(100));
*/
/*
// recursive function to find factorial of a number
function factorial(n) {
  if (n == 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(7));
*/

/*
// recursive function to find fibonacci number
function fib(n) { 

    if ( n <= 1 ) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }

console.log(fib(4)); // 2
console.log(fib(7)); // 13
*/

/*
// Rest parameters 
function sumOf(a,b,...value) {
  let sum = 0;
  for (let index of value) {
    sum += index;
  }
  console.log("***",value[1]);
  return sum;
}

console.log(sumOf(3,4,7,3));
*/

/*
let value1 = [ 2, 5, 60, 8];
let value2 = [ 4, 10, 7, 9];
console.log(Math.max(...value1, ...value2));
*/

/*
let value = "Surprise!";
function f() {
  let value = "the closest value";
  function g() {
    // debugger; // in console: type alert(value); Surprise!
  }
  return g;
}

let g = f();
console.log(value);
// g();
*/

/*
function makeFunc() {
  const name = 'Mozilla';
  return function displayName() {
    console.log(name);
  }
  // return displayName;
}

const myFunc = makeFunc();
myFunc();
*/

/*
function two(){
  var a;
  console.log(a);
}
function one(){
  var a=2;
  console.log(a);
  two();
}
var a=1;
console.log(a);
one();
*/

/*
function abc () {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() { 
      debugger;
      console.log(i); 
    }, 1000 + i);
  }
}

abc();
*/

/*
function getFunc() {
  let value = "test";
  console.log(value);

  let func = function () {
    console.log(value);
  };

  return func;
}

getFunc()();
*/

/*

Muje darr nahi gumrahi ka
har rasta tuj tak jata hai

Muje yaad ho tum lekin
Muje yaad bhi hai apni
kabhi yun bhi yaad aao ki main
khud ko bhul jauu..

Gum mere saath badii door tak gayee
payii na mujmain thakaan
to vo khud thakk gyee...

*/

/*
// 💡 Call() method
const person1 = {
  name: "Sachin1",
  skill: "Web-development",
  feature: function (lang) {
    console.log(`My self ${this.name} and I am currently learning ${this.skill}. I know only ${lang} languages`);
  }
};

const person2 = {
  name: "Sachin2",
  skill: "Javascript"
};

person1.feature.call(person2, 2 ); // person2 object accessing methods of person1 object

// Output: My self Sachin2 and I am currently learning Javascript. I know only 2 languages
*/

/*
// 💡 bind() Method
const object1 = {
  name: "Sachin",
  skill: "javascript",
  feature: function (pizza) {
    console.log(`Hii My self ${this.name}.I love ${this.skill} I ordered ${pizza} pizza  `);
  },
};

const object2 = {
  name: "Sachin2",
  skill: "coding",
};

const obj = object1.feature.bind(object2,3); // takes an object as first argument
obj();                                     // and creates a new function.
// Output : Hii My self Sachin2.I love coding. I ordered 3 pizza
*/

/*
// 💡 apply() method
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Sachin",
  lastName: "Kumar"
}

person.fullName.apply(person1);
// output : Sachin Kumar

*/

/*
const person = {
  fullName: function(city, country) {
    console.log( this.firstName + " " + this.lastName + "," + city + "," + country );
  }
}

const person1 = {
  firstName:"Sachin",
  lastName: "Kumar"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);
// output : Sachin Kumar,Oslo,Norway
*/

//💡 prototype
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

// Explanation
// Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

// So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.

// If we have a method in animal, it can be called on rabbit:

//💡 Constructors

function Person(name, lastname, running) {
  this.name = name,
    this.lastname = lastname,
    this.playing = running,
    this.hobby = function () {
      console.log(`My hobby is ${this.playing}`);
    }
}

let user = new Person("Sachin", "kumar", "running");
console.log(user.name);
