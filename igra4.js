function guessTheNumberGame() {
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let score = 0; 

        for (let i = 0; i < quiz.length; i++) {
            const currentQuestion = quiz[i];

            let questionText = currentQuestion.question + "\n";
            for (let j = 0; j < currentQuestion.options.length; j++) {
                questionText += currentQuestion.options[j] + "\n";
            }

            const userAnswer = prompt(questionText);

            if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
                score++; 
            }
        }

        alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
}

document.getElementById("playButtonfour").addEventListener("click", guessTheNumberGame);
document.getElementById("playButtonfours").addEventListener("click", guessTheNumberGame);