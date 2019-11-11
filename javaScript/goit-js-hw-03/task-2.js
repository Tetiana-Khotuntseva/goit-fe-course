"use scrict";

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

function countProps (obj){
    const entries = Object.entries(obj);
    return entries.length;
    }

    console.log(countProps({}));
    console.log(countProps({  name: 'Mango',  age: 20,}));
    console.log(countProps(user));