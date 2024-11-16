// "use strict"

a = 15;
console.log(a);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
  a: 50
};

obj.a = 10;

console.log(obj);

console.log(name);
var name = 'Ivan';
name = 'Alex';


{
  var result = 50;
}

console.log(result);

alert(5); // обязательна точка с запятой
[].push('a');

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage("Hello, Wordl!");
console.log(num);

function calc(a, b) {
  return (a + b);
}

console.log(calc(2, 3));
console.log(calc(1, 9));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log("Hello, World");
};

logger();

// стрелочная функция
const calc = (a, b) => { return a + b };
const calc2 = a => a;