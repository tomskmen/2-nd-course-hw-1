
document.getElementById('reverseButton').addEventListener('click', function() {
    // Запрашиваем у пользователя текст
    let userInput = prompt("Введите текст для переворота:");

    // Проверяем, что пользователь ввел текст
    if (userInput !== null) {
        // Переворачиваем текст
        let reversedText = userInput.split('').reverse().join('');

        // Выводим перевернутый текст
        alert("Перевернутый текст: " + reversedText);
    } else {
        alert("Вы не ввели текст.");
    }
});
function reverText() {
    const userInput = prompt("Введите текст:");
  
    const reverText = userInput.split("").reverse().join("");
  
    alert("Перевернутый текст: " + reverText);
  }

document.getElementById("reverseButtons").addEventListener("click", reverText);