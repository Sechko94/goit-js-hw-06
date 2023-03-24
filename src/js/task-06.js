const validationInput = document.querySelector("#validation-input");

function getCorrectLength(event) {
  // чому dataset.length - Властивість length не є властивістю currentTarget. Властивість length належить до об'єктів типу рядок (string), тому виклик методу length на об'єкті currentTarget призведе до помилки.
    // отримуємо значення довжини правильної кількості символів 
    const inputLength = event.currentTarget.dataset.length;

    // отримуємо значення введеного тексту у поле введення
    const inputValue = event.currentTarget.value;
    if (inputValue.length === Number(inputLength)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');

    } 
}

validationInput.addEventListener('blur', getCorrectLength);
