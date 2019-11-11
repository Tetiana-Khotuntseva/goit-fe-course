"use scrict";

const employees = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }
  
  const employees2 = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }
  
  function findBestEmployee (obj){
    const arrValues = Object.values(obj); 
    console.log(arrValues);
    console.log(Math.max(...arrValues));
    return Math.max(...arrValues);
  }
  findBestEmployee(employees);
  findBestEmployee(employees2);