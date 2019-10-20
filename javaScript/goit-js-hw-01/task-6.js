"use scrict";
let input;
let total = 0;
input = prompt('Введите число');

while (input) {
    input = Number(input);
    if (input) {
        total = total+input;
    } else {
        alert('Вы ввели не число');
    }
    input = prompt('Введите число');
} alert (`Общая сумма равна ${total}`)