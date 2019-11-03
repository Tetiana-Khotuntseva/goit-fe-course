"use scrict";

function calculateEngravingPrice(message, pricePerWord){ 
    const howManyWords = (message.split(' ')).length;
    return (howManyWords * pricePerWord);
  }

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
  