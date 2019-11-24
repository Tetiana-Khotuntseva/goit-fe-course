"use scrict";

import users from "./users";
//Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
