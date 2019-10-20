"use scrict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const value = prompt('Please enter a password');

if (value === ADMIN_PASSWORD){
    message = alert("Добро пожаловать!")  ;
} else if (value === null) {
    message = alert("Отменено пользователем!")
}
else {
    message = alert("Доступ запрещен, неверный пароль!")
}
