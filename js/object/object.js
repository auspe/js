const obj = {
  name: "John",
  age: 25,
  isMarried: false
}

// console.log(obj.name);
console.log(obj["isMarried"]);

let Russia = {
  Moscow: "Москва",
  Petrograd: "Питер"
}

console.log(Russia.Moscow)

// Массив -- это частный случай Объекта (комплексного типа данных)

// Массив используется для хранения данных, которые идут строго по порядку

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 9, {}, []];

console.log(arr[5]);

let ag = {
  name: "Alexander",
  year: 1987,
  city: {
    first: "Istra",
    second: "Moscow"
  }
}

console.log(ag.city.second);


let myArray = ["Moscow", "Istra", "LA", "New York", {name: "Alexander"}, ['array.jpg']];

console.log(myArray[4]);