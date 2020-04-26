function greeting() {
  return 'Hello Jorge';
}

let message = greeting();
console.log('message: ', message);

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(2, 4);

console.log('sum ' , result);

let message2 = 'Hello';
if (message2 === 'Hello') {
  var count = 100;
}

console.log(count);

//Closures
function iniciar() {
  var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    alert(nombre);  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
//iniciar(); 

//

function setUpCounter(val) {
  return function counter() {
    return val++;
  }
}
let counter1 = setUpCounter(0);
console.log(counter1());
console.log(counter1());

let counter2 = setUpCounter(10);
console.log(counter2());
console.log(counter2());

// Arrow Functions
let greetingAF = () => {
  return 'Hello World AF'
}

let messageAF = greetingAF();

console.log(`messageAF ${messageAF}`);

let sumAF = (num1, num2) => num1 + num2;

let output = sum(10,17);

console.log(output);

//This

let message4 = {
  name: 'Jorge',
  regularFunction: function() {
    console.log(this)
    console.log('Hello ' + this.name);
  },
  arrowFunction: () => console.log('Hi ' + this.name)
}

message4.regularFunction();
message4.arrowFunction();
console.log(this);

// call()

let person1 = {name: 'Jorge', age: 29}
let person2 = {name: 'Olga', age: 63}

let sayHi = function() {
  console.log('Hi ' + this.name);
}

sayHi.call(person1);
sayHi.call(person2);

// apply()
function introduction(name, profession) {
  console.log(`My name is ${name} and I am a ${profession}.`);
  console.log(this);
}
introduction('Jorge', 'Web Developer');
introduction.apply(undefined, ['Olga', 'Dressmaker']);
introduction.apply(undefined, ['Veronica', 'Bacteriologist']);

// bind()

let person11 = {name: 'Mary',
                getName: function() {
                  return this.name;
                }
};
let person22 = { name: 'Jhon'};
let getNameCopy = person11.getName.bind(person22);
console.log(getNameCopy())

// Built-in Functions

// eval
let x = 1;
let y = 2;
console.log(eval('x + y + 2'));

// parseInt
console.log(parseInt('F', 16));
console.log(parseInt('15', 100));
console.log(parseInt('Hi', 10));

// parseFloat
console.log(parseFloat('3.99'));
console.log(parseFloat('3.99e-1'));
console.log(parseFloat(''));

// escape
console.log(escape('text'));
console.log(escape(' '));
console.log(escape('abc&%'));

// unescape
console.log(unescape('text'));
console.log(unescape('%20'));
console.log(unescape('abc%26%25'));

// Default paramenters
function sayHi3(name = "World") {
  console.log('Hello' + name)
}
sayHi3('hello');

// Rest parameter
let sayHi5 = function greet(messageGreet, ...names) {
  console.log(messageGreet + ' everyone!');
  names.forEach(name => console.log('Hi ' + name));
}
sayHi5('Welcome', 'Jorge', 'Olga', 'Alejandra', 'Veronica');

// Spread operator
function display(char1, char2, char3, char4, ...others) {
  console.log(others)
  console.log(char1, char2, char3, char4);
}
let letters = 'abcdefghijklm';
display(...letters)




