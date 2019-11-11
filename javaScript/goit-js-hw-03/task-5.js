"use scrict";

const products = [
    {name: 'Radar', price: 1300, quantity: 4},
    {name: 'Skaner', price: 2700, quantity: 3},
    {name: 'Droid', price: 400, quantity: 7},
    {name: 'Zaxvat', price: 1200, quantity: 2},
  ]

function getAllPropsValue(arr, prop){
    let result = [];
    for (let element of arr) {
      if (prop in element) {
        result.push(element[prop]);
      }
    }
    return result;
  }

  console.log(getAllPropsValue(products, 'price'));
  console.log(getAllPropsValue(products, 'name'));
  console.log(getAllPropsValue(products, 'quantity'));
