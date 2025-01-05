// Addition
let myName = "Alexander";
let myAge = 37;
let IKnowJS = true;
console.log(`Hello, my name is ${myName}, I am ${myAge} years old and I can code JS: ${IKnowJS}`);

// Subtraction
let nr1 = 20; // инициализируем переменную под именем nr1 и присваеваем ей значение 20
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2; // 16
let result2 = str1 - nr3; // NaN - это заклчение, что результат вычитания числа из строки не является числом
console.log(result1, result2);

// Multiplication
let nr15 = 15;
let nr10 = 10;
let strHi = "Hi";
let num3 = 3;
let resul3 = nr15 * nr10;
let result4 = strHi * num3;
console.log(resul3, result4);

// Division
let nr30 = 30;
let nr5 = 5;
let result35 = nr30 / nr5;
console.log(result35);

let stDestiny = 'Destiny';
console.log(stDestiny / nr5);

// Exponentiation
let dva = 2;
let tri = 3;
let resultDvaTri = dva ** tri;
console.log(resultDvaTri);
console.log(4 ** 2 === 4 * 4);
// Найти корень числа
let cislo = 25;
let koren = .5;
console.log(cislo ** koren);

// Modulus
const chislo15 = 15;
const chislo4 = 4;
const resultat = chislo15 % chislo4;
console.log(`${chislo15} % ${chislo4} = ${resultat}`);

// postfix
let nr = 2;
console.log(nr++); // Переменная увеличивается на 1 после логирования
console.log(nr);

// prefix
let nr0 = 2;
console.log(++nr0); // Переменная увеливается на 1, а затем происходит логирование

let ch4 = 4;
let piat5 = 5;
let dva2 = 2;
let resultat3 = (ch4++ + ++piat5 * dva2++);
let resultat4 = (ch4 + ++piat5 * dva2);
console.log(resultat3);
console.log(piat5);
console.log(dva2);
console.log(resultat4);