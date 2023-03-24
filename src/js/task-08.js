
// Отримання елементів форми
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    // Зупиняємо перезавантаження сторінки
    event.preventDefault(); 

//  отримую посилання на інпути електронної пошти та пароля
    const inputEmail = loginForm.elements.email;
    const inputPassword = loginForm.elements.password;

    // Перевірка на наявність порожніх полів
    if (inputEmail.value === '' || inputPassword.value === '') {
        alert("Будь ласка, заповніть всі поля");
    } else {
        const formData = {
            email: inputEmail.value,
            password: inputPassword.value
        };
        console.log(formData);
        loginForm.reset();
    } 
    
})



