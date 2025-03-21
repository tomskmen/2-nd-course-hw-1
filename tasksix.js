//exercise #1
const arr = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

//exercise #2
const arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break; // Прерываем цикл, так как индекс найден
    }
}

//exercise #3
const arr3 = [1, 3, 5, 10, 20];

const result = arr3.join(' ');
console.log(result);

//exercise #4
const arr4 = [];
for (let i = 0; i < 3; i++) {
    const arr04 = [];
    for (let i = 0; i < 3; i++) {
        arr04.push(1);
    }
    arr4.push(arr04);
}
console.log(arr4);

//exercise #5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//exercise #6
const array = [9, 8, 7, 'a', 6, 5];
const sortedArray = array.sort((a, b) => {
    return a - b;
});
const filteredArray = sortedArray.filter(item => item !== 'a');
console.log(filteredArray);

//exercise #7
const arr7 = [9, 8, 7, 6, 5];

const userInput = prompt("Угадайте число из массива:");
const userNumber = Number(userInput);

if (arr7.includes(userNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//exercise #8
let str = 'abcdef';
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

//exercise #9
const arr9 = [[1, 2 ,3], [4, 5, 6]];
const newArr9 = [];
for (let i =0; i < arr9.length; i++) {
    newArr9.push(...arr9[i]);
}
console.log(newArr9);

//exercise #10
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i + 1]) {
        console.log(arr10[i] + arr10[i + 1]);
    }
}

//exercise #11
function square(arr11) {
    return arr11.map(item => item ** 2);
}
console.log(square([1, 2, 3]));

//exercise #12
function getLength(arr12) {
    return arr12.map(item => item.length);
}
console.log(getLength(['h1', 'world']));

//exercise #13
function negativeNumbers(arr13) {
    return arr13.filter(item => item <0);
}
console.log(negativeNumbers([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));

//exercise #14
function randomNumb() {
    return Math.floor(Math.random() * 10);
}
const arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(randomNumb());
}
console.log(arr14);
const evenArr14 =[];
for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 === 0) {
        evenArr14.push(arr14[i]);
    }
}
console.log(evenArr14);

//exercise #15
function randomNumb() {
    return Math.floor(Math.random() * 10);
}
const arr15 = [];
for (let i = 0; i < 5; i++) {
    arr15.push(randomNumb());
}
console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);






