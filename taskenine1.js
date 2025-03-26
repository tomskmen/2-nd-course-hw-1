//Задание №1
const heading = document.querySelector("#heading");
const button = document.querySelector("#toggleButton");

button.addEventListener("click", () => {
    if (heading.style.display === "none") {
        heading.style.display = "block";
        button.textContent = "Скрыть";
    } else {
        heading.style.display = "none";
        button.textContent = "Показать";
    }
});

//Задание №2
const text = document.querySelector("#text");
        const colorButton = document.querySelector("#colorButton");
        colorButton.addEventListener("click", () => {
            text.style.color = "blue";
        });

//Задание №3
const textt = document.querySelector("#textzam");    
        const textButton = document.querySelector("#textButton");
        textButton.addEventListener("click", () => {
            textzam.textContent = "Привет, мир!";
             });

//Задание №4
 document.getElementById('changeTextBtn').addEventListener('click', function() {
                const descriptions = document.querySelectorAll('.description');
                descriptions.forEach(function(description) {
                    description.textContent = 'Измененный текст';
                });
            });

//Задание №5
 document.getElementById('changeText').addEventListener('click', function() {
                const descriptions = document.querySelectorAll('.description1');
                descriptions.forEach(function(description) {
                    description.textContent = 'Новый текст';
                });
            });

            const descriptions = document.querySelectorAll('.description1');

//Задание №6
document.getElementById('addButton').addEventListener('click', function() {

    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Добавление нового элемента в DOM';
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(newParagraph);
  });


//Задание №7
document.getElementById('removeButton').addEventListener('click', function() {
    const firstDescription = document.querySelector('.description2');
    if (firstDescription) {
        firstDescription.remove();
    } else {
        console.log('Нет элементов с классом description для удаления.');
    }
});





