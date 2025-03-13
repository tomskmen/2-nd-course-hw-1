// exercise #1
//function min(a, b) {
// if (a < b) {
//  return a;
// } 
//   else {
//       return b;
//   }
//}

const min = (a, b) => (a < b) ? a : b;

console.log(min(8, 4));
console.log(min(6, 6));

// exercise #2
// function isEven(n){
//     if (n % 2 ===0) {
//         return 'Число четное';
//     }
//     else {
//         return 'Число нечетное';
//     }
// }

const isEven = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

console.log(isEven(2));
console.log(isEven(3));

// exercise #3
function square(number) {
    console.log(number ** 2);
}
const up = (n) => n ** 2;
square(5);
console.log(up(5));

// exercise #4
function age() {
    let age = +prompt('Сколько тебе лет?');
    if (age < 0) {
        alert('Возраст не может быть отрицательным');
    } else if (age >= 0 && age <= 12) {
        alert ('Привет, друг!');
    } else if (age >= 13) {
        alert ('Добро пожаловать!');
    } else {
        alert ('Вы ввели неправильное значение');
    }
}
age();

// exercise #5
function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(calc('hello', 2));
console.log(calc(5, 2));
console.log(calc('hello', 'hello'));

// exercise #6
function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}
console.log(getNumber());

// exercise #7
function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());
