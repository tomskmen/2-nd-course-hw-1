document.getElementById('reverseButton').addEventListener('click', function() {
    // Запрашиваем у пользователя текст
    let userInput = prompt("Введите текст для переворота:");

    // Проверяем, что пользователь ввел текст
    if (userInput !== null) {
        // Переворачиваем текст
        let reversedText = userInput.split('').reverse().join('');

        // Выводим перевернутый текст
        document.getElementById('result').innerText = "Перевернутый текст: " + reversedText;
    } else {
        alert("Вы не ввели текст.");
    }
});
