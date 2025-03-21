//exercise #1
let str = 'js';
str = str.toLocaleUpperCase();
console.log(str);

//exercise #2
function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filter(['JavaScript', 'Java', 'Puthon'], 'ja'))

//exercise #3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//exercise #4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//exercise #5
function getRandomNumbers() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumbers());

//exercise #6
function getRandomNumber(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor
(Math.random() * num));
}
console.log(getRandomNumber(10));

//exercise #7
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(15,20));

//exercise #8
console.log(new Date());

//exercise #9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//exercise #10
function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const weekDay = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return `
    Дата: ${day} ${month} ${year} — это ${weekDay}.
    Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
