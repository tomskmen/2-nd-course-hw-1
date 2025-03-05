let password = 'пароль'; 

let userInput = prompt('Введите пароль'); 

if (userInput === password) {
    alert('Пароль введен верно'); 
} else {
    alert('Пароль введен неправильно'); 
}



let c = Number(prompt("Введите число:")); 

if (c > 0 && c < 10) {
    console.log("Верно");
    alert("Верно");  
} else {
    console.log("Неверно");
    alert("Неверно"); 
}



let d = Number(prompt("Введите первое число (d):")); 
let e = Number(prompt("Введите второе число (e):"));

if (d > 100 || e > 100) {
    console.log("Верно");
    alert("Верно"); 
} else {
    console.log("Неверно");
    alert("Неверно"); 
}



let a = '2';
let b = '3';
alert(Number(a) + Number(b)); 


let monthNumber = Number(prompt("Введите номер месяца (от 1 до 12):")); 

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Неверно");
    alert("Неверно: в году только 12 месяцев!");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            alert("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            alert("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            alert("Осень");
            break;
    }
    console.log("Верно");
    alert("Верно");
}




