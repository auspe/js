// функции
/*
function индефикатор (аргументы) { // объявление функции - ключевое слово function после которого идет индефикатор после которого идет список аргументов в круглых скобках через запятую, после которых в фигурных скобках идут инструкции
  инструкции
  return выражение
}
// аргументы -- это переменные, которые мы передаем в нашу функцию, внутри функции мы можем что-то делать с этими переменными и после этого мы можем вернуть какое-то значение из этой функции, для этого предусмотренно ключевое слово return выражение
*/

// # Fuction Declaration Statement Инструкция Объявления Функции
function greet(name) {
  return "Hello", name;
}

// выражение вызова
// индефикатор(аргументы);

console.log(greet("Sorax").toUpperCase());

let green = function (name) {
  return "Hello " + name;
};

console.log('Alexa'.split());