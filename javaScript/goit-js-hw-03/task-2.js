"use scrict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const countProps = obj => Object.entries(obj).length;

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 20 }));
console.log(countProps(user));
