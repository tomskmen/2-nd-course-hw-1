/* Задание №1 */
let aa = 10;  
alert(aa);    
aa = 20;      
alert(aa);    

/* Задание №2 */
let releaseYear = 2007;  
alert(releaseYear); 

/* Задание №3 */
let creator = "Brendan Eich";
alert(creator);

/* Задание №4 */
let a = 10;
let b = 2;
alert("Сумма: " + (a + b));
alert("Разность: " + (a - b));
alert("Произведение: " + (a * b));
alert("Частное: " + (a / b));

/* Задание №5 */
let result = 2 ** 5;
alert(result);

/* Задание №6 */
let c = 9;
let d = 2;
let remainder = c / d;
alert(remainder);

/* Задание №7 */
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/* Задание №8 */
let age = prompt("Сколько вам лет?");
alert("Вам " + age + " лет.");

/* Задание №9 */
let user = {
    name: "Иван",    /* name — строка "Иван" */
    age: 30,         /* age — число 30 */
    isAdmin: false   /* isAdmin — булево значение false */
};
alert("Имя: " + user.name + "\nВозраст: " + user.age + "\nАдмин: " + user.isAdmin);

/* Задание №10 */
let name = prompt("Как вас зовут?");  /* prompt() запрашивает у пользователя имя и сохраняет его в переменную name. */
alert(`Привет, ${name}!`);            /* alert() выводит приветствие, используя шаблонную строку */
