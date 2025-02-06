let arr = [0, 1, 2, 3];
arr.splice(1, 2);
console.log(arr);

arr.splice(0, 1, null);
console.log(arr);
arr.splice(1, 1, 'tri');
console.log(arr);

delete arr[0]; // заменяет элемент по индексу на undefined
console.log(arr);
arr.splice(0, 0, 'odin');
arr.splice(1, 0, 'dva');
console.log(arr);
let meta = arr.find('dva');
console.log(meta);
