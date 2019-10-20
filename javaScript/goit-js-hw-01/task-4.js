"use scrict";

const pricePerDroid = 3000;
const credits = 23580;
let amountOfDroid;

amountOfDroid = prompt("How many droid would you like to buy?")

if (amountOfDroid === null){
    console.log("Отменено пользователем!")
    console.log()
} else if (amountOfDroid === ''){
    console.log("Пожалуйста, введите число!")
}else if((pricePerDroid * amountOfDroid)>credits){
    console.log("Недостаточно средств на счету!")
} else {
    console.log(pricePerDroid * amountOfDroid)
    const creaditLeft = (credits - (pricePerDroid * amountOfDroid))
    console.log(`Вы купили ${amountOfDroid} дроидов, на счету осталось ${creaditLeft} кредитов.`)
    }