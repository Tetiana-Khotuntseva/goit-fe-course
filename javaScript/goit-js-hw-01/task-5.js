"use scrict";
let country;
const priceForChina = 100;
const priceForChilli = 250;
const priceForAustria = 170;
const priceForIndia = 80;
const priceForJamaica = 120;


country = (prompt('Ведите название страны')).toUpperCase; 
console.log(country);

if (country){
switch (country) {
    case "CHINA":
    console.log(`Доставка в ${country} будет стоить ${priceForChina} кредитов`);
      break;
  
    case 'CHILLI':
        console.log(`Доставка в ${country} будет стоить ${priceForChilli} кредитов`);
        break;

    case 'AUSTRIA':
        console.log(`Доставка в ${country} будет стоить ${priceForAustria} кредитов`);
        break;

    case 'INDIA':
        console.log(`Доставка в ${country} будет стоить ${priceForIndia} кредитов`);
        break;
  
    case 'JAMAICA':
        console.log(`Доставка в ${country} будет стоить ${priceForJamaica} кредитов`);
        break;

    default: alert('В вашей стране доставка не доступна');
    }
} else if (country === "") {
    console.log("Вы не ввели название страны!");
} else {
    console.log("Отменено пользователем!");
}