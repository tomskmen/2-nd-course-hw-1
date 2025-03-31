function maths() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question;
    let correctAnswer;
    
    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '/':
            // Гарантируем, что деление выполняется без остатка
            const dividend = num1 * num2;
            question = `${dividend} / ${num1}`;
            correctAnswer = dividend / num1;
            break;
    }
    return { question, correctAnswer };
}

function mathematics() {
    const { question, correctAnswer } = maths();
    const userAnswer = prompt(`Решите пример: ${question}`);
    
    if (userAnswer === null) {
        alert("Вы отменили ввод. Игра завершена.");
        return;
    }
    
    if (parseFloat(userAnswer) === correctAnswer) {
        alert("Правильно!");
    } else {
        alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
    }
}



document.getElementById("playButtontwo").addEventListener("click", mathematics);
document.getElementById("playButtontwos").addEventListener("click", mathematics);