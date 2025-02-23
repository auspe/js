let goods = ["Milk", "Bread", "Apples"];
console.log(goods.length);

// добавляет в конец массива
lines = ['odin', 'dva', 'tri'];
let zero = lines.push("chetyre");
console.log(lines);
console.log(zero);

// добавляет с определенным индексом
let a = [0, 1, 2, 3];
console.log(a);
let b = a.splice(2, 2, 'dva'); // возвращает вырезанное
console.log(b);

// объединяет два массива
let c = a.concat(b);
console.log(c);
c = c.concat(4, 5, '6', 'santa');
console.log(c);

// Удаление элементов
// Убрать последний элемент pop()
c.pop();
console.log(c);
// Убрать первый элемент shift()
c.shift();
console.log(c);
// Удаление по индексу
c.splice(0, 7);
console.log(c);