// Получим элементы формы
const form = document.getElementById("registrationForm");
const nameField = document.getElementById("name");
const passwordField = document.getElementById("password");
const userTypeField = document.getElementById("userType");
const nameErrorMessage = document.getElementById("name-error");
const passwordErrorMessage = document.getElementById("password-error");
const userTypeErrorMessage = document.getElementById("userType-error");

// Функция для проверки имени
function validateName() {
    if (!nameField.value || nameField.value.trim().length == 0) {
        nameErrorMessage.innerText = "Please enter a valid name.";
        return false;
    } else {
        nameErrorMessage.innerText = "";
        return true;
    }
}

// Функция для проверки пароля
function validatePassword() {
    if (passwordField.value.length < 6) {
        passwordErrorMessage.innerText = "Password must be at least 6 characters long.";
        return false;
    } else {
        passwordErrorMessage.innerText = "";
        return true;
    }
}

// Функция для проверки выбора типа пользователя
function validateUserType() {
    if (userTypeField.value == "") {
        userTypeErrorMessage.innerText = "Please select a user type.";
        return false;
    } else {
        userTypeErrorMessage.innerText = "";
        return true;
    }
}

// Обработка события отправки формы
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    let isValid = true;

    // Выполняем валидацию всех полей
    isValid &= validateName();
    isValid &= validatePassword();
    isValid &= validateUserType();

    if (isValid) {
        alert("Form submitted successfully!");
        // Здесь можно добавить дальнейшую обработку формы, например, AJAX-запрос
    } else {
        console.log("Form has errors.");
    }
});