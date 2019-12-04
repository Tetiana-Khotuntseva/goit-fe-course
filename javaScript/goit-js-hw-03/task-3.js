"use scrict";
//Напиши функцию findBestEmployee(employees), которая принимает объект
//сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
//Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const employees2 = {
  poly: 12,
  mango: 17,
  ajax: 4,
};

const findBestEmployee = obj => {
  let emplName;
  let maxTasksamound = 0;
  for (const key in obj) {
    if (obj[key] > maxTasksamound) {
      maxTasksamound = obj[key];
      emplName = key;
    }
  }
  return emplName;
};

console.log(findBestEmployee(employees));
console.log(findBestEmployee(employees2));
