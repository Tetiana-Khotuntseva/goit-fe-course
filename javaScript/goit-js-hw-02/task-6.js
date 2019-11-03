"use scrict";
const numbers = [];
let total = 0;
let input;
input = prompt('Введите число');
while (input) {
    input = Number(input);
    if (input) {
      numbers.push(input);
      total = total+input;
    } else {
      alert('Вы ввели не число');
    }
      input = prompt('Введите число');
} 
console.log(`Общая сумма чисел равна ${total}`)
