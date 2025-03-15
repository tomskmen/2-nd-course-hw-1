function guessTheNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;

    while (guess !== secretNumber) {
        guess = parseInt(prompt("Угадайте число от 1 до 100:"), 10);
        
        if (isNaN(guess)) {
            alert("Пожалуйста, введите число!");
            continue;
        }
        
        if (guess < secretNumber) {
            alert("Загаданное число больше!");
        } else if (guess > secretNumber) {
            alert("Загаданное число меньше!");
        } else {
            alert("Поздравляю! Вы угадали число " + secretNumber);
            break;
        }
    }
}

document.getElementById("playButton").addEventListener("click", guessTheNumberGame);
