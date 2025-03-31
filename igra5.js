function playGame() {
    const choices = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, введите камень, ножницы или бумага.");
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = "";
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }
    
    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`);
}


document.getElementById("playButtonfive").addEventListener("click", playGame);
document.getElementById("playButtonfives").addEventListener("click", playGame);