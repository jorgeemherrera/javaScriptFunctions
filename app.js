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
console.log(this)